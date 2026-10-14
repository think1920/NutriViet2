# 🧪 Danh Sách Ca Kiểm Thử: Xác Thực & Ghi Nhận Calo

Dự án: **NutriViet3**  
Module: **Xác thực (Auth) & Theo dõi dinh dưỡng (Tracker)**

---

## Danh Sách Test Cases

| Mã TC | Tên ca kiểm thử | Các bước thực hiện | Dữ liệu thử nghiệm | Kết quả mong đợi | Mức độ |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **TC-AUTH-01** | Đăng ký tài khoản thành công | 1. Nhập thông tin đăng ký hợp lệ<br>2. Nhấn nút Đăng ký | Email: `user1@gmail.com`<br>Pass: `P@ssword123`<br>Tên: `Nguyễn Nam` | Tài khoản được tạo, tự động đăng nhập và yêu cầu điền hồ sơ thể trạng ban đầu | Critical |
| **TC-AUTH-02** | Đăng ký với email đã tồn tại | 1. Nhập email đã có trong hệ thống<br>2. Nhấn Đăng ký | Email: `user1@gmail.com` | Hệ thống báo lỗi: *"Email này đã được sử dụng"* | High |
| **TC-TRACK-01** | Tìm kiếm món ăn có dấu tiếng Việt | 1. Vào trang thêm bữa ăn<br>2. Nhập ô tìm kiếm: "Phở bò" | Từ khóa: `Phở bò` | Trả về danh sách: "Phở bò tái", "Phở bò chín", "Phở bò sốt vang" kèm số calo chính xác | Critical |
| **TC-TRACK-02** | Tìm kiếm món ăn không dấu | 1. Nhập ô tìm kiếm: "com tam" | Từ khóa: `com tam` | Hệ thống tự động nhận diện và trả về: "Cơm tấm sườn nướng", "Cơm tấm bì chả" | Medium |
| **TC-TRACK-03** | Tính toán tổng Calo khi thêm món | 1. Chọn "Cơm tấm sườn nướng" (627 kcal)<br>2. Nhập số lượng: 2 đĩa<br>3. Bấm Thêm | Món: `Cơm tấm`<br>Số lượng: `2` | Tổng calo hiển thị = `1,254 kcal`, thanh tiến độ calo trong ngày tăng thêm 1,254 | Critical |
| **TC-TRACK-04** | Nhập số lượng món ăn âm | 1. Chọn món ăn<br>2. Nhập số lượng: -1 đĩa<br>3. Bấm Thêm | Số lượng: `-1` | Hệ thống báo lỗi validation: *"Số lượng phải lớn hơn 0"*, không cho phép lưu | High |
| **TC-TRACK-05** | Xóa món ăn khỏi nhật ký bữa ăn | 1. Bấm nút xóa (icon thùng rác) cạnh món đã nạp<br>2. Xác nhận xóa | Món: `Phở bò tái` (431 kcal) | Món ăn biến mất khỏi danh sách bữa, tổng calo trong ngày giảm đi 431 kcal | High |
