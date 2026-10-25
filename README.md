# Locket Gold Demo

Website tĩnh responsive sử dụng HTML, CSS và JavaScript.

## Tính năng
- Giao diện hồng, tối ưu cho điện thoại.
- Ba gói mẫu, mỗi gói có đủ 8 tính năng.
- Chọn gói, mã giảm giá mẫu `LOCKET10`, tính tổng.
- Biểu mẫu dựng nội dung yêu cầu đặt hàng qua email.

## Trước khi công khai
- Giá 79.000đ / 139.000đ / 199.000đ chỉ là giá mẫu; sửa trong `index.html` và `script.js`.
- Mở `script.js`, điền email nhận đơn vào `CONFIG.orderEmail`.
- Đây chưa có cơ sở dữ liệu, trang quản trị hoặc thanh toán tự động. Mã giảm giá chạy phía trình duyệt chỉ là demo.
- Không yêu cầu khách gửi mật khẩu Locket, mã OTP hoặc thông tin đăng nhập. Đây là website độc lập, không phải trang chính thức của Locket.

## Đưa lên mạng miễn phí bằng Cloudflare Pages
1. Tải và giải nén ZIP.
2. Tạo repository mới trên GitHub rồi tải các file trong thư mục `locket-gold-site` lên thư mục gốc của repository.
3. Đăng nhập Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
4. Chọn repository đó. Với website HTML tĩnh, để Build command trống và đặt Build output directory thành `/` hoặc thư mục gốc theo giao diện hiện tại.
5. Nhấn Deploy. Sau khi triển khai thành công, Cloudflare cung cấp URL dạng `https://ten-du-an.pages.dev`.

Chưa có link công khai cho tới khi hoàn tất triển khai trên tài khoản của bạn.


## Thông tin đã cập nhật
- Giá gói: tháng 79.000đ, năm 139.000đ, vĩnh viễn 199.000đ.
- Liên hệ: Zalo 0888628744, Facebook và TikTok theo các liên kết trong trang.
- Mã QR Vietcombank được lưu tại `payment-qr.jpeg`. Kiểm tra kỹ thông tin tài khoản và người nhận trước khi công khai website.
