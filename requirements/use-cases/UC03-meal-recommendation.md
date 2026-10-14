# 🍲 Đặc Tả UC03: Gợi Ý Thực Đơn Thông Minh Theo Thể Trạng

- **Mã Use Case**: UC-03
- **Tên Use Case**: Gợi ý thực đơn thông minh (Smart Meal Recommendation)
- **Tác nhân chính**: Người dùng đã đăng nhập
- **Mô tả**: Dựa trên lượng calo mục tiêu còn thiếu trong ngày và các tiêu chí lọc (mục tiêu tăng/giảm cân, khẩu vị vùng miền, ngân sách, dị ứng thực phẩm), hệ thống tự động tính toán và đề xuất thực đơn các món ăn Việt Nam tối ưu.

---

## 1. Điều Kiện Tiên Quyết (Preconditions)
- Người dùng đã hoàn thành thiết lập hồ sơ thể trạng (Chiều cao, cân nặng, mục tiêu calo).

## 2. Điều Kiện Sau (Postconditions)
- Người dùng xem được danh sách thực đơn gợi ý phân bổ cho các bữa.
- Người dùng có thể chọn "Áp dụng thực đơn này" để tự động thêm tất cả món vào nhật ký bữa ăn.

---

## 3. Luồng Sự Kiện Chính (Main Flow)
1. Người dùng chọn mục **"Gợi ý thực đơn"** từ thanh điều hướng.
2. Hệ thống kiểm tra số calo người dùng đã tiêu thụ và lượng calo còn lại trong ngày.
3. Người dùng chọn các tiêu chí tùy chọn:
   - Chế độ ăn: *Bình thường, Eat Clean, Thuần chay, Ít tinh bột (Low-Carb)*.
   - Vùng miền: *Bắc, Trung, Nam*.
   - Mức ngân sách mong muốn (Tiết kiệm, Tiêu chuẩn, Thoải mái).
4. Người dùng bấm **"Tạo thực đơn gợi ý"**.
5. Thuật toán của hệ thống phân tích các món ăn thỏa mãn điều kiện và cân bằng tỷ lệ dinh dưỡng (Carb 45-55%, Protein 20-30%, Fat 20-25%).
6. Hệ thống hiển thị danh sách thực đơn đề xuất kèm công thức và tổng calo ước tính.
7. Người dùng có thể chọn đổi món (Shuffle món khác) hoặc bấm **"Chọn thực đơn này"**.

---

## 4. Các Luồng Ngoại Lệ (Exception Flows)
- **5a. Tiêu chí lọc quá chặt không tìm thấy món ăn phù hợp**:
  - Hệ thống hiển thị thông báo: *"Không tìm thấy đủ món ăn phù hợp với các tiêu chí khắt khe đã chọn. Vui lòng nới lỏng bộ lọc để xem thêm gợi ý."*
