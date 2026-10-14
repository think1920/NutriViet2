# 🥗 Đặc Tả UC02: Ghi Nhận Dinh Dưỡng Bữa Ăn Hằng Ngày

- **Mã Use Case**: UC-02
- **Tên Use Case**: Ghi nhận bữa ăn (Daily Nutrition Tracking)
- **Tác nhân chính**: Người dùng đã đăng nhập (Logged-in User)
- **Mô tả**: Cho phép người dùng tìm kiếm món ăn Việt Nam, nhập số lượng khẩu phần và ghi vào nhật ký theo từng bữa (Sáng, Trưa, Tối, Phụ). Hệ thống tự động tính toán calo và vi chất tiêu thụ.

---

## 1. Điều Kiện Tiên Quyết (Preconditions)
- Người dùng đã đăng nhập vào hệ thống NutriViet3.
- Người dùng đã thiết lập mục tiêu calo hằng ngày trong hồ sơ cá nhân.

## 2. Điều Kiện Sau (Postconditions)
- Dữ liệu món ăn và thành phần dinh dưỡng được lưu vào bảng nhật ký bữa ăn (`daily_meals`).
- Biểu đồ năng lượng và tỷ lệ dinh dưỡng (Carbs, Protein, Fat) trên Dashboard được cập nhật theo thời gian thực.

---

## 3. Luồng Sự Kiện Chính (Main Flow)
1. Người dùng chọn một bữa ăn cụ thể trên màn hình Dashboard (ví dụ: Bữa trưa) và bấm **"Thêm món"**.
2. Hệ thống hiển thị thanh tìm kiếm món ăn kèm gợi ý các món ăn phổ biến.
3. Người dùng nhập từ khóa tìm kiếm (ví dụ: *"Cơm tấm"*).
4. Hệ thống truy vấn và hiển thị danh sách kết quả phù hợp kèm năng lượng calo trên mỗi đơn vị (ví dụ: *"Cơm tấm sườn nướng - 627 kcal/đĩa"*).
5. Người dùng chọn món ăn mong muốn, nhập số lượng hoặc trọng lượng (ví dụ: 1 đĩa).
6. Hệ thống tính toán tổng calo, protein, carb, fat tương ứng và hiển thị bản xem trước.
7. Người dùng nhấn nút **"Lưu vào nhật ký"**.
8. Hệ thống lưu bản ghi vào CSDL, cập nhật thanh calo còn lại trong ngày và hiển thị thông báo thành công.

---

## 4. Các Luồng Ngoại Lệ (Exception Flows)
- **4a. Món ăn không có trong thư viện**:
  - Người dùng bấm nút "Tạo món ăn mới".
  - Chuyển hướng sang form nhập thông tin món ăn tùy chỉnh (Tên, Calo, Macros ước tính).
- **5a. Người dùng nhập số lượng âm hoặc bằng 0**:
  - Hệ thống báo lỗi: *"Số lượng khẩu phần phải lớn hơn 0."*
