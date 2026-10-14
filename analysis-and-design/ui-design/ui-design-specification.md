# 🎨 Quy Chuẩn Thiết Kế Giao Diện (UI Design Specification)

Dự án: **NutriViet3**  
Phong cách chủ đạo: **Tươi sáng, hiện đại, thân thiện sức khỏe (Health & Wellness)**

---

## 1. Bảng Màu Hệ Thống (Color Palette)

| Tên màu | Mã HEX | Ý nghĩa / Ứng dụng |
| :--- | :---: | :--- |
| **Primary (Xanh lá dinh dưỡng)** | `#10B981` | Màu thương hiệu chính, nút CTA, thanh tiến độ calo đạt chuẩn |
| **Primary Dark** | `#047857` | Hover states, tiêu đề quan trọng |
| **Secondary (Cam năng lượng)** | `#F59E0B` | Điểm nhấn calo nạp vào, cảnh báo gần chạm trần năng lượng |
| **Accent Red** | `#EF4444` | Vượt ngưỡng calo, thông báo lỗi, nút xóa |
| **Background Dark** | `#0F172A` | Nền chế độ Dark Mode |
| **Background Light** | `#F8FAFC` | Nền mặc định Light Mode |
| **Surface Card** | `#FFFFFF` | Nền thẻ món ăn, bảng dữ liệu |
| **Text Primary** | `#1E293B` | Văn bản chính, tiêu đề |
| **Text Secondary**| `#64748B` | Chú thích, đơn vị khẩu phần |

---

## 2. Kiểu Chữ (Typography)

- **Phông chữ chính (Primary Font)**: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Tỉ lệ font chữ**:
  - `H1 (Page Title)`: 32px / Bold (700)
  - `H2 (Section Heading)`: 24px / SemiBold (600)
  - `H3 (Card Title)`: 18px / SemiBold (600)
  - `Body Text`: 14px - 16px / Regular (400)
  - `Caption / Small Text`: 12px / Medium (500)

---

## 3. Các Thành Phần Giao Diện Cốt Lõi (Key Components)

- **Calorie Circular Progress Ring**: Vòng tròn tiến độ trực quan hiển thị Calo đã nạp / Calo mục tiêu.
- **Macronutrient Breakdown Bar**: Thanh 3 màu chia tỷ lệ: Đỏ/Cam (Protein), Vàng (Carbs), Xanh (Fat).
- **Food Item Card**: Thẻ món ăn gồm hình ảnh món, tên tiếng Việt, số calo và nút bấm thêm nhanh (+).
