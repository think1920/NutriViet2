# 📋 Mẫu Bảng Ca Kiểm Thử (Test Cases Specification Template)

---

## Bảng Đặc Tả Test Case

| Mã Test Case | Mô tả ca kiểm thử | Điều kiện tiên quyết | Các bước thực hiện | Dữ liệu đầu vào (Test Data) | Kết quả mong đợi (Expected Result) | Trạng thái (Pass/Fail) | Mức độ ưu tiên |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-01** | Kiểm tra đăng nhập với thông tin hợp lệ | Người dùng đã có tài khoản | 1. Mở trang đăng nhập<br>2. Nhập email & pass<br>3. Bấm Đăng nhập | Email: `test@nutriviet.vn`<br>Pass: `ValidPass123@` | Đăng nhập thành công, chuyển hướng vào Dashboard | PASS | Critical |
| **TC-02** | Kiểm tra đăng nhập với mật khẩu không đúng | Tài khoản tồn tại | 1. Mở trang đăng nhập<br>2. Nhập pass sai<br>3. Bấm Đăng nhập | Email: `test@nutriviet.vn`<br>Pass: `WrongPass!` | Hiển thị thông báo "Email hoặc mật khẩu không chính xác" | PASS | High |
