const express = require(“express”);
const cors = require(“cors”);

const app = express();

app.use(express.json());
app.use(cors());

app.get(”/”, (req, res) => {
res.json({
success: true,
message: “Locket Gold Backend đang hoạt động!”
});
});

app.get(”/health”, (req, res) => {
res.json({ success: true });
});

app.post(”/api/checkout”, (req, res) => {
const username = String(req.body?.username || “”).trim();

if (!username || username.length > 80) {
return res.status(400).json({
success: false,
message: “Vui lòng nhập tên tài khoản hợp lệ.”
});
}

const qrUrl = process.env.PAYMENT_QR_URL;

if (!qrUrl) {
return res.status(503).json({
success: false,
message: “Backend chưa được cấu hình ảnh QR.”
});
}

return res.json({
success: true,
qrUrl: qrUrl,
username: username,
message: “Vui lòng quét mã QR để chuyển khoản. Chủ website cần tự kiểm tra giao dịch trước khi xác nhận thanh toán.”
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(“Backend đang chạy tại cổng “ + PORT);
});
