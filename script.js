// Cấu hình trước khi công khai website.
const CONFIG = {
  orderEmail: "", // Điền email nhận đơn, ví dụ donhang@example.com
  couponCode: "LOCKET10",
  couponPercent: 10
};
const prices = {"Gói tháng":79000,"Gói năm":139000,"Gói vĩnh viễn":199000};
const plan = document.getElementById("plan");
const total = document.getElementById("total");
const coupon = document.getElementById("coupon");
const couponMsg = document.getElementById("couponMsg");
let couponApplied = false;
function money(n){return new Intl.NumberFormat("vi-VN").format(n)+"đ";}
function updateTotal(){let p=prices[plan.value]||0;if(couponApplied)p=Math.round(p*(100-CONFIG.couponPercent)/100);total.textContent=money(p);}
function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2800);}
document.querySelectorAll(".choose").forEach(btn=>btn.addEventListener("click",()=>{plan.value=btn.dataset.plan;couponApplied=false;couponMsg.textContent="";updateTotal();document.getElementById("order").scrollIntoView({behavior:"smooth"});}));
plan.addEventListener("change",updateTotal);
document.getElementById("apply").addEventListener("click",()=>{if(coupon.value.trim().toUpperCase()===CONFIG.couponCode){couponApplied=true;couponMsg.style.color="#39805e";couponMsg.textContent=`Đã áp dụng mã giảm ${CONFIG.couponPercent}%.`;}else{couponApplied=false;couponMsg.style.color="#c74770";couponMsg.textContent="Mã không hợp lệ hoặc bạn chưa nhập mã."; }updateTotal();});
document.getElementById("orderForm").addEventListener("submit",e=>{e.preventDefault();if(!CONFIG.orderEmail){toast("Hãy cấu hình orderEmail trong script.js trước khi nhận đơn.");alert("Website mẫu đã sẵn sàng. Mở script.js và điền email nhận đơn vào CONFIG.orderEmail trước khi dùng biểu mẫu.");return;}const d=new FormData(e.currentTarget);let p=prices[plan.value]||0;if(couponApplied)p=Math.round(p*(100-CONFIG.couponPercent)/100);const subject=`Yêu cầu đặt hàng - ${plan.value}`;const body=[ "YÊU CẦU ĐẶT HÀNG",`Gói: ${plan.value}`,`Tên: ${d.get("customer")}`,`Liên hệ: ${d.get("contact")}`,`Mã giảm giá: ${coupon.value||"Không có"}`,`Tổng tạm tính: ${money(p)}`,"Đây là yêu cầu đặt hàng, chưa phải xác nhận thanh toán."].join("\n");location.href=`mailto:${encodeURIComponent(CONFIG.orderEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
document.getElementById("year").textContent=new Date().getFullYear();updateTotal();
