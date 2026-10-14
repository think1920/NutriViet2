# 📑 Đặc Tả Yêu Cầu Phần Mềm (Software Requirements Specification - SRS)

Dự án: **NutriViet3**  
Phiên bản: 1.0  

---

## 1. Yêu Cầu Chức Năng (Functional Requirements - FR)

### Nhóm 1: Quản Lý Người Dùng & Hồ Sơ Thể Trạng (User Management)
- **FR-01**: Hệ thống cho phép người dùng đăng ký tài khoản qua Email / Mật khẩu hoặc OAuth (Google).
- **FR-02**: Hệ thống cho phép người dùng đăng nhập, đổi mật khẩu và khôi phục mật khẩu.
- **FR-03**: Hệ thống cho phép người dùng cập nhật hồ sơ cá nhân: Chiều cao, cân nặng, độ tuổi, giới tính, mức độ vận động và mục tiêu (giảm cân, duy trì, tăng cân).
- **FR-04**: Hệ thống tự động tính toán BMR (Mifflin-St Jeor), TDEE và chỉ số BMI dựa trên hồ sơ.

### Nhóm 2: Cơ Sở Dữ Liệu Thực Phẩm (Food Database)
- **FR-05**: Cho phép người dùng tìm kiếm món ăn theo tên tiếng Việt có dấu hoặc không dấu.
- **FR-06**: Hiển thị thông tin chi tiết của món ăn: Calo, Protein, Carb, Fat, Chất xơ, Natri trên mỗi 100g hoặc khẩu phần.
- **FR-07**: Cho phép người dùng tự tạo món ăn tùy chỉnh (Custom Food) nếu không có sẵn trong hệ thống.
- **FR-08**: Cho phép Quản trị viên (Admin) duyệt, chỉnh sửa hoặc thêm mới các món ăn chuẩn vào hệ thống.

### Nhóm 3: Nhật Ký Ăn Uống & Theo Dõi Dinh Dưỡng (Nutrition Tracker)
- **FR-09**: Cho phép người dùng ghi nhận món ăn vào các bữa: Bữa sáng, Bữa trưa, Bữa tối, Bữa phụ.
- **FR-10**: Tự động tính toán tổng calo đã nạp trong ngày và calo còn lại theo mục tiêu.
- **FR-11**: Hiển thị biểu đồ tỷ lệ các chất dinh dưỡng đa lượng (Macronutrient distribution).
- **FR-12**: Cho phép theo dõi lượng nước uống hằng ngày (Water Intake Tracker).

### Nhóm 4: Gợi Ý Thực Đơn Thông Minh (Smart Recommendation)
- **FR-13**: Đề xuất thực đơn theo ngày hoặc theo tuần cân bằng với lượng calo mục tiêu.
- **FR-14**: Cho phép người dùng lọc thực đơn theo sở thích (Ăn chay, Low-carb, Eat Clean, Không hải sản).

---

## 2. Yêu Cầu Phi Chức Năng (Non-Functional Requirements - NFR)

- **NFR-01 (Hiệu năng)**: Thời gian phản hồi API tìm kiếm món ăn phải dưới **300ms** cho 95% số lượng request.
- **NFR-02 (Bảo mật)**: Mật khẩu người dùng phải được mã hóa bằng thuật toán an toàn (Bcrypt với salt rounds >= 10). Sử dụng JWT có thời hạn cho xác thực phiên.
- **NFR-03 (Khả dụng)**: Hệ thống đạt độ sẵn sàng tối thiểu **99.5%**.
- **NFR-04 (Tính tương thích)**: Giao diện Web hiển thị tốt và phản hồi mượt mà (Responsive) trên màn hình máy tính, máy tính bảng và điện thoại di động (iOS / Android).
- **NFR-05 (Ngôn ngữ)**: Hỗ trợ tiếng Việt là ngôn ngữ mặc định chính.
