# 📋 Kế Hoạch Dự Án (Project Plan) - NutriViet3

## 1. Thông Tin Chung
- **Tên dự án**: NutriViet3
- **Thời gian thực hiện**: 12 tuần (Giai đoạn Sprint 2 tuần/lần)
- **Phương pháp luận phát triển**: Agile / Scrum

---

## 2. Các Cột Mốc Quan Trọng (Milestones)

| Cột mốc | Tên giai đoạn | Thời gian | Kết quả bàn giao (Deliverables) |
| :---: | :--- | :---: | :--- |
| **M1** | Khởi động & Đặc tả yêu cầu | Tuần 1 - 2 | Vision Document, SRS, Use Cases, Kế hoạch dự án |
| **M2** | Thiết kế kiến trúc & UI | Tuần 3 - 4 | SAD, CSDL Schema, Wireframe & Mockups UI/UX |
| **M3** | Phát triển Sprint 1 & 2 | Tuần 5 - 8 | Module Authentication, Module Quản lý món ăn, Nhật ký calo |
| **M4** | Phát triển Sprint 3 & Kiểm thử | Tuần 9 - 10 | Module Đề xuất thực đơn, Test Plan, Báo cáo kiểm thử |
| **M5** | Triển khai & Nghiệm thu | Tuần 11 - 12 | Deploy Production, User Guide, Báo cáo tổng kết dự án |

---

## 3. Cấu Trúc Phân Chia Công Việc (Work Breakdown Structure - WBS)

1. **Khởi động & Quản lý**:
   - 1.1 Xác lập team & công cụ cộng tác (GitHub, Trello/Jira).
   - 1.2 Họp phân công vai trò và trách nhiệm.
2. **Kỹ thuật yêu cầu (Requirements)**:
   - 2.1 Phỏng vấn khảo sát người dùng về thói quen ăn uống món Việt.
   - 2.2 Viết tài liệu Vision và lập bảng SRS.
   - 2.3 Thiết kế Use Case Diagrams và đặc tả chi tiết từng Use Case.
3. **Phân tích & Thiết kế (Analysis & Design)**:
   - 3.1 Thiết kế kiến trúc tổng thể Client-Server / Microservices.
   - 3.2 Thiết kế cơ sở dữ liệu quan hệ (PostgreSQL / MySQL) & Bảng dinh dưỡng.
   - 3.3 Thiết kế giao diện người dùng trên Figma.
4. **Phát triển mã nguồn (Development)**:
   - 4.1 Xây dựng RESTful API Backend tại `/src`.
   - 4.2 Xây dựng Frontend Web / Mobile UI.
   - 4.3 Tích hợp thuật toán tính BMR/TDEE và đề xuất món ăn.
5. **Kiểm thử & Đảm bảo chất lượng (QA/QC)**:
   - 5.1 Viết Unit Tests & Integration Tests.
   - 5.2 Thực hiện Manual Testing theo bộ Test Cases.
   - 5.3 Lập báo cáo lỗi và nghiệm thu chất lượng phần mềm.
