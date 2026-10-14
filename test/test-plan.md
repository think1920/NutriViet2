# 📑 Kế Hoạch Kiểm Thử Tổng Thể (Master Test Plan) - NutriViet3

Dự án: **NutriViet3**  
Trưởng nhóm QA: Hoàng Văn E  

---

## 1. Mục Tiêu Kiểm Thử
- Đảm bảo các chức năng chính (Đăng nhập, Thiết lập hồ sơ, Tìm kiếm món ăn Việt, Ghi nhận calo, Đề xuất thực đơn) hoạt động chính xác theo tài liệu SRS.
- Xác thực tính chính xác của các công thức tính toán chỉ số dinh dưỡng (BMR theo Mifflin-St Jeor, TDEE, tổng năng lượng khẩu phần).
- Đảm bảo bảo mật tài khoản người dùng, mã hóa mật khẩu và tính toàn vẹn dữ liệu.

---

## 2. Phạm Vi Kiểm Thử (Testing Scope)

### Trong phạm vi (In-Scope):
- **Unit Testing**: Kiểm thử các hàm tính toán BMR, TDEE, tổng hợp Macros tại `/src`.
- **Integration Testing**: Kiểm thử các luồng API RESTful (Auth API, Foods API, Meal Tracker API).
- **Functional Testing**: Kiểm thử giao diện người dùng trên trình duyệt (Chrome, Firefox, Safari Mobile).
- **Security Testing**: Kiểm thử xác thực token JWT hết hạn, kiểm tra mã lỗi và phòng chống SQL Injection cơ bản.

### Ngoài phạm vi (Out-of-Scope):
- Kiểm thử tải trọng cực lớn (> 100,000 người dùng đồng thời trong giai đoạn Beta ban đầu).

---

## 3. Chiến Lược Kiểm Thử (Testing Strategy)

| Cấp độ kiểm thử | Loại kiểm thử | Công cụ sử dụng | Người thực hiện |
| :--- | :--- | :--- | :--- |
| Tầng mã nguồn | Unit Test | Node Test Runner / Jest | Lập trình viên (Dev) |
| Tầng API | API Integration Test | Postman / Supertest | QA Tester & Dev |
| Tầng Giao diện | Manual / UI Test | Web Browser & DevTools | QA Tester |
| Hiệu năng | Performance Test | K6 / Apache JMeter | QA Tester |

---

## 4. Tiêu Chí Nghiệm Thu (Pass / Fail Criteria)
- 100% các ca kiểm thử thuộc mức độ nghiêm trọng **Critical** và **High** phải PASS.
- Không còn bất kỳ lỗi nào gây sập hệ thống (Crash) hoặc tính toán sai lệch lượng Calo lớn hơn 5%.
- Độ bao phủ kiểm thử đơn vị (Unit Test Coverage) đạt tối thiểu **80%** trên các module tính toán logic.
