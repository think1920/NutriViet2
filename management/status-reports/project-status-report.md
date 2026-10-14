# 📈 Báo Cáo Tình Trạng Dự Án (Project Status Report)

**Dự án**: NutriViet3  
**Ngày báo cáo**: 14/10/2026  
**Kỳ báo cáo**: Sprint 0 - Khởi động & Đặc tả yêu cầu  
**Người phụ trách**: Nguyễn Văn A (Project Manager)  

---

## 1. Tóm Tắt Tình Trạng (Executive Summary)
Dự án **NutriViet3** đang diễn ra đúng tiến độ đã đề ra trong Kế hoạch tổng thể. Toàn bộ hạ tầng tài liệu, cơ cấu quản lý phiên bản mã nguồn, khung đặc tả yêu cầu và kiến trúc hệ thống đã được thiết lập đầy đủ.

---

## 2. Bảng Theo Dõi Tiến Độ Hạng Mục (Workstream Health)

| Hạng mục | Trạng thái | Tiến độ (%) | Người phụ trách | Đánh giá |
| :--- | :---: | :---: | :--- | :--- |
| **Quản lý dự án (Management)** | 🟢 Tốt | 100% | Nguyễn Văn A | Đã hoàn thành các kế hoạch, quy trình |
| **Kỹ thuật yêu cầu (Requirements)** | 🟢 Tốt | 90% | Trần Thị B | Đã có Vision, SRS, hoàn thiện các Use Case |
| **Phân tích & Thiết kế (A&D)** | 🟢 Tốt | 85% | Lê Văn C | Đã hoàn thành SAD, CSDL ERD, UI Spec |
| **Phát triển mã nguồn (Development)** | 🟢 Tốt | 80% | Phạm Thị D | Khởi tạo source code `/src`, cấu hình API |
| **Kiểm thử (QA/QC)** | 🟢 Tốt | 85% | Hoàng Văn E | Đã chuẩn bị Test Plan và Test Cases mẫu |

*Ghi chú: 🟢 Tốt / 🟡 Có rủi ro / 🔴 Nghiêm trọng*

---

## 3. Các Vấn Đề Cần Ra Quyết Định (Decisions Required)
1. **Lựa chọn Database**: Thống nhất dùng **PostgreSQL** để lưu trữ quan hệ và dữ liệu JSON cho các thành phần vi chất dinh dưỡng linh hoạt.
2. **Quy chuẩn đo lường món ăn**: Sử dụng đơn vị chuẩn `gam (g)` làm đơn vị gốc trong CSDL, đồng thời cho phép người dùng nhập theo `đơn vị thông dụng` (bát, đĩa, phần, cuốn) có hệ số quy đổi tương ứng.
