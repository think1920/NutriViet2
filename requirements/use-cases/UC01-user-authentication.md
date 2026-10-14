# 👤 Đặc Tả UC01: Đăng Ký & Đăng Nhập Tài Khoản

- **Mã Use Case**: UC-01
- **Tên Use Case**: Xác thực người dùng (User Authentication)
- **Tác nhân chính**: Người dùng chưa đăng nhập (Guest)
- **Mô tả**: Cho phép người dùng tạo tài khoản mới trên NutriViet3 hoặc đăng nhập bằng tài khoản sẵn có để truy cập dữ liệu cá nhân.

---

## 1. Điều Kiện Tiên Quyết (Preconditions)
- Thiết bị của người dùng có kết nối Internet.

## 2. Điều Kiện Sau (Postconditions)
- Người dùng đăng nhập thành công, nhận được JWT Token và được chuyển hướng tới trang Dashboard tổng quan.

---

## 3. Luồng Sự Kiện Chính (Main Flow - Đăng Nhập)
1. Người dùng chọn nút "Đăng nhập" trên thanh điều hướng.
2. Hệ thống hiển thị biểu mẫu đăng nhập (Email & Mật khẩu).
3. Người dùng nhập Email và Mật khẩu, sau đó bấm nút "Đăng nhập".
4. Hệ thống kiểm tra thông tin đăng nhập:
   - Truy vấn người dùng theo Email.
   - So sánh chuỗi hash mật khẩu với cơ sở dữ liệu.
5. Hệ thống sinh Access Token (JWT) và Refresh Token, lưu thông tin phiên đăng nhập.
6. Hệ thống chuyển hướng người dùng vào màn hình chính (Dashboard).

---

## 4. Các Luồng Ngoại Lệ (Exception Flows)
- **4a. Sai mật khẩu hoặc Email không tồn tại**:
  - Hệ thống hiển thị thông báo lỗi: *"Email hoặc mật khẩu không chính xác, vui lòng thử lại."*
  - Giữ lại Email trên biểu mẫu và yêu cầu nhập lại mật khẩu.
- **4b. Tài khoản bị tạm khóa**:
  - Hệ thống thông báo: *"Tài khoản của bạn đã bị khóa. Vui lòng liên hệ hỗ trợ viên."*
