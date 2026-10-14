# 💻 Source Code - NutriViet3

Thư mục này chứa toàn bộ mã nguồn của hệ thống **NutriViet3**.

---

## 🏗️ Cấu Trúc Mã Nguồn

```text
src/
├── config/              # Cấu hình môi trường, kết nối database
├── controllers/         # Bộ điều khiển xử lý logic nghiệp vụ
├── models/              # Định nghĩa schema / model dữ liệu
├── routes/              # Định nghĩa các endpoint API RESTful
├── services/            # Tầng dịch vụ tính toán dinh dưỡng, gợi ý thực đơn
├── middlewares/         # Middleware xác thực JWT, kiểm tra quyền, validation
├── utils/               # Tiện ích bổ trợ (tính BMR, TDEE, format ngày tháng)
├── index.js             # Điểm khởi chạy ứng dụng (Entry point)
└── package.json         # Danh mục thư viện phụ thuộc và scripts
```

---

## ⚡ Bắt Đầu Nhanh

```bash
# Cài đặt thư viện
npm install

# Chạy server ở chế độ phát triển
npm run dev

# Chạy server ở chế độ production
npm start
```

---

## 📝 Quy Ước Viết Code

- **Ngôn ngữ**: Node.js (ES6+ Modules)
- **Formatting**: Đảm bảo tuân theo Prettier và ESLint chuẩn Airbnb.
- **Naming Convention**:
  - Tên file & thư mục: `camelCase` hoặc `kebab-case`.
  - Class/Model: `PascalCase` (vd: `UserModel`, `FoodItem`).
  - Biến & Hàm: `camelCase` (vd: `calculateTDEE()`, `getUserNutritionLog()`).
  - Hằng số: `UPPER_SNAKE_CASE` (vd: `DEFAULT_CALORIE_GOAL`).
