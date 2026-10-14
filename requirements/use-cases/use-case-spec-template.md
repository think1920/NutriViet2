# 📄 Mẫu Đặc Tả Ca Sử Dụng (Use Case Specification Template)

---

## 1. Thông Tin Chung
- **Mã Use Case**: UC-[Số thứ tự]
- **Tên Use Case**: [Tên hành động ngắn gọn]
- **Tác nhân chính (Primary Actor)**: [Người dùng / Quản trị viên / Hệ thống]
- **Tác nhân phụ (Secondary Actor)**: [Nếu có]
- **Mô tả tóm tắt**: [Mô tả ngắn gọn mục đích của ca sử dụng]

---

## 2. Điều Kiện Tiên Quyết (Preconditions)
- Điều kiện cần có trước khi bắt đầu thực hiện ca sử dụng.

---

## 3. Điều Kiện Sau (Postconditions)
- Trạng thái của hệ thống sau khi ca sử dụng kết thúc thành công.

---

## 4. Luồng Sự Kiện Chính (Main Flow)
1. Tác nhân thực hiện bước 1...
2. Hệ thống kiểm tra và phản hồi bước 2...
3. Tác nhân thực hiện bước 3...
4. Hệ thống hoàn tất và lưu trữ kết quả.

---

## 5. Các Luồng Thay Thế / Ngoại Lệ (Alternative / Exception Flows)
- **Luồng 2a**: Dữ liệu không hợp lệ -> Hệ thống thông báo lỗi và yêu cầu nhập lại.
- **Luồng 3a**: Mất kết nối mạng -> Hệ thống lưu tạm vào bộ nhớ cục bộ (Local Storage).
