# ⚠️ Quản Trị Rủi Ro Dự Án (Risk Management) - NutriViet3

Bảng theo dõi và biện pháp giảm thiểu các rủi ro tiềm ẩn trong dự án NutriViet3.

---

## 📊 Ma Trận Đánh Giá Rủi Ro

| Mã RR | Mô tả rủi ro | Mức độ ảnh hưởng | Khả năng xảy ra | Biện pháp phòng ngừa / Khắc phục | Người phụ trách |
| :---: | :--- | :---: | :---: | :--- | :--- |
| **RSK-01** | Thiếu dữ liệu dinh dưỡng chuẩn xác của các món ăn địa phương | Cao | Cao | Tham khảo bảng thành phần thực phẩm Việt Nam của Viện Dinh Dưỡng Quốc Gia và tham vấn chuyên gia dinh dưỡng. | BA / Dev |
| **RSK-02** | Chậm tiến độ do các thành viên bận lịch học / thi cử | Cao | Trung bình | Chia nhỏ Sprint thành các task dưới 8 giờ làm việc, cập nhật tiến độ mỗi 2 ngày (Daily standup). | PM |
| **RSK-03** | Hiệu năng hệ thống bị nghẽn khi truy vấn tìm kiếm hàng nghìn món ăn | Trung bình | Thấp | Thiết lập chỉ mục (Indexes) trên cột tên món ăn và áp dụng Redis Caching cho các món phổ biến. | Software Architect |
| **RSK-04** | Người dùng nhập sai đơn vị khẩu phần (gam vs phần/chén/tô) | Trung bình | Cao | Chuẩn hóa UI: Cung cấp danh mục đơn vị trực quan kèm hình ảnh minh họa khối lượng ước tính. | UI Designer / QA |
