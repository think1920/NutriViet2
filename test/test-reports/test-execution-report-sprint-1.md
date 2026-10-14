# 📊 Báo Cáo Kết Quả Kiểm Thử - Sprint 1 (Test Execution Report)

**Dự án**: NutriViet3  
**Kỳ kiểm thử**: Sprint 1 (Module Xác Thực & Quản Lý Món Ăn)  
**Ngày thực hiện**: 14/10/2026  
**Người lập báo cáo**: Hoàng Văn E (QA Lead)  

---

## 1. Tóm Tắt Thực Thi (Execution Summary)

- **Tổng số Test Cases thực thi**: 15 TCs
- **Số ca Đạt (Passed)**: 14 TCs (93.3%)
- **Số ca Thất bại (Failed)**: 1 TC (6.7%)
- **Số ca Bị chặn (Blocked)**: 0 TC (0%)

---

## 2. Chi Tiết Lỗi Phát Hiện (Defects Log)

| Mã Bug | Mô tả lỗi phát hiện | Mức độ | Phân loại | Trạng thái | Người xử lý |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **BUG-001** | Khi tìm kiếm từ khóa món ăn có dấu huyền kép ("Phở bò"), API thi thoảng bị delay 450ms | Medium | Performance | In-Progress | Lê Văn C (Architect) |

---

## 3. Kết Luận & Đánh Giá Chất Lượng
- Các luồng nghiệp vụ cốt lõi (Đăng ký tài khoản, Đăng nhập, Tìm kiếm món ăn Việt, Tính toán tổng năng lượng nạp vào theo khẩu phần) đều đạt tiêu chuẩn chất lượng và độ chính xác cao.
- Bản dựng Sprint 1 đủ điều kiện nghiệm thu nội bộ và sẵn sàng cho Sprint 2 (Tích hợp module AI Gợi ý thực đơn).
