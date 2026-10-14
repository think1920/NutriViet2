# 📐 Quy Chuẩn Lập Trình & Quy Trình Git (Coding Standards)

## 1. Chuẩn Viết Mã (Code Standards)

### JavaScript / TypeScript
- Tuân theo chuẩn **Airbnb JavaScript Style Guide**.
- Sử dụng ES Module (`import` / `export`).
- Đặt tên biến và hàm theo kiểu `camelCase`.
- Hằng số toàn cục viết hoa theo kiểu `UPPER_SNAKE_CASE`.
- Tên lớp (Classes) và Components viết theo `PascalCase`.
- Sử dụng `const` làm mặc định, chỉ dùng `let` khi giá trị biến thay đổi, tuyệt đối không dùng `var`.

---

## 2. Quy Trình Git & Commit (Conventional Commits)

### Cú pháp thông điệp commit:
```text
<type>(<scope>): <short description>
```

### Các loại commit (Types):
- `feat`: Tính năng mới (ví dụ: `feat(tracker): add daily calorie progress bar`)
- `fix`: Sửa lỗi (ví dụ: `fix(auth): handle expired jwt token gracefully`)
- `docs`: Chỉnh sửa tài liệu (ví dụ: `docs(api): update meal endpoint specifications`)
- `refactor`: Tái cấu trúc mã nguồn không làm đổi tính năng
- `test`: Thêm hoặc cập nhật bài kiểm thử (ví dụ: `test(calc): add unit tests for TDEE calculation`)
- `chore`: Thay đổi file cấu hình, cài đặt build hoặc dependencies

### Quy ước nhánh Git (Branching Strategy):
- `main`: Nhánh production ổn định.
- `develop`: Nhánh tích hợp chính của các tính năng.
- `feature/<feature-name>`: Nhánh phát triển tính năng riêng.
- `hotfix/<fix-name>`: Nhánh xử lý sự cố khẩn cấp trên production.
