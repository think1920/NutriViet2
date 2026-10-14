# 🏗️ Tài Liệu Kiến Trúc Phần Mềm (Software Architecture Document - SAD)

Dự án: **NutriViet3**  
Phiên bản: 1.0  

---

## 1. Phong Cách Kiến Trúc (Architectural Style)

Hệ thống NutriViet3 được thiết kế theo mô hình **Kiến trúc Phân tầng (Layered Architecture / 3-Tier Architecture)** kết hợp các nguyên lý **RESTful API**:

1. **Presentation Layer (Tầng Giao Diện)**:
   - Single Page Application (SPA) xây dựng bằng HTML5, CSS3 hiện đại và JavaScript/React.
   - Giao tiếp với backend thông qua giao thức HTTPS và JSON REST API.
2. **Application / Business Logic Layer (Tầng Nghiệp Vụ)**:
   - Backend Runtime: Node.js môi trường bất đồng bộ cao.
   - Controllers: Xử lý request, validate dữ liệu đầu vào.
   - Services: Đóng gói logic nghiệp vụ tính toán dinh dưỡng, thuật toán giải thuật đề xuất món ăn.
   - Middlewares: Xác thực JWT, phân quyền truy cập, ghi log tập trung.
3. **Data Access & Persistence Layer (Tầng Dữ Liệu)**:
   - Cơ sở dữ liệu quan hệ: PostgreSQL lưu trữ hồ sơ người dùng, danh mục món ăn, nhật ký bữa ăn.
   - Cache (Tùy chọn): Redis để lưu bộ đệm kết quả tìm kiếm các món ăn thông dụng.

---

## 2. Công Nghệ Sử Dụng (Technology Stack)

| Hạng mục | Công nghệ đề xuất | Lý do lựa chọn |
| :--- | :--- | :--- |
| **Backend** | Node.js / Express | Tốc độ xử lý I/O cao, hệ sinh thái npm phong phú, dễ bảo trì |
| **Database** | PostgreSQL | Quan hệ dữ liệu chặt chẽ, hỗ trợ JSONB cho dữ liệu dinh dưỡng linh hoạt |
| **Authentication** | JWT (JSON Web Token) | Stateless, an toàn, hỗ trợ mở rộng ngang dễ dàng |
| **Frontend** | Vanilla JS / React SPA | Giao diện hiện đại, phản hồi nhanh, tối ưu trải nghiệm thiết bị di động |
| **Kiểm thử** | Node Test Runner / Jest / Supertest | Đầy đủ khả năng kiểm thử từ Unit test đến End-to-End API test |

---

## 3. Chiến Lược An Toàn & Bảo Mật (Security Strategy)

- **Mã hóa thông tin nhạy cảm**: Mật khẩu được băm bằng thuật toán `bcrypt` với muối (salt).
- **Phòng chống tấn công phổ biến**:
  - Ngăn ngừa SQL Injection thông qua ORM / Parameterized Queries.
  - Ngăn ngừa XSS (Cross-Site Scripting) bằng cách làm sạch dữ liệu đầu vào.
  - Cấu hình CORS chặt chẽ chỉ cho phép các domain được ủy quyền.
  - Giới hạn tần suất gửi yêu cầu (Rate Limiting) để chống tấn công brute-force và DoS.
