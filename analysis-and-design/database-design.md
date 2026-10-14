# 🗄️ Thiết Kế Cơ Sở Dữ Liệu (Database Design) - NutriViet3

Hệ quản trị cơ sở dữ liệu: **PostgreSQL**

---

## 1. Danh Sách Các Bảng (Tables Overview)

1. `users`: Lưu thông tin tài khoản người dùng và vai trò.
2. `health_profiles`: Lưu các chỉ số thể trạng (chiều cao, cân nặng, BMR, TDEE, mục tiêu calo).
3. `food_categories`: Phân loại món ăn (Món nước, Món mặn, Canh, Món chay, Đồ uống, v.v.).
4. `foods`: Danh mục món ăn Việt Nam kèm giá trị dinh dưỡng chi tiết.
5. `daily_meals`: Bản ghi các bữa ăn trong ngày của người dùng (Sáng, Trưa, Tối, Phụ).
6. `meal_items`: Chi tiết từng món ăn được nạp trong một bữa ăn cụ thể.

---

## 2. Đặc Tả Chi Tiết Các Bảng

### Bảng `users`
| Tên cột | Kiểu dữ liệu | Ràng buộc | Mô tả |
| :--- | :--- | :--- | :--- |
| `id` | UUID / SERIAL | PRIMARY KEY | Khóa chính định danh người dùng |
| `email` | VARCHAR(120) | UNIQUE, NOT NULL | Địa chỉ email đăng nhập |
| `password_hash`| VARCHAR(255) | NOT NULL | Mật khẩu đã được mã hóa bcrypt |
| `full_name` | VARCHAR(100) | NOT NULL | Họ và tên hiển thị |
| `role` | VARCHAR(20) | DEFAULT 'user' | Phân quyền: 'user', 'admin', 'nutritionist' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Thời gian tạo tài khoản |

### Bảng `health_profiles`
| Tên cột | Kiểu dữ liệu | Ràng buộc | Mô tả |
| :--- | :--- | :--- | :--- |
| `id` | SERIAL | PRIMARY KEY | Khóa chính |
| `user_id` | INT / UUID | FOREIGN KEY (`users.id`) | Khóa ngoại trỏ đến người dùng |
| `gender` | VARCHAR(10) | CHECK ('male', 'female') | Giới tính |
| `age` | INT | NOT NULL | Tuổi |
| `height_cm` | DECIMAL(5,2)| NOT NULL | Chiều cao tính theo centimet |
| `weight_kg` | DECIMAL(5,2)| NOT NULL | Cân nặng tính theo kilogram |
| `activity_level` | VARCHAR(20)| NOT NULL | Mức độ hoạt động (sedentary, moderate, active) |
| `target_goal` | VARCHAR(20)| NOT NULL | Mục tiêu: 'lose_weight', 'maintain', 'gain_muscle' |
| `daily_calorie_target` | INT | NOT NULL | Lượng calo mục tiêu mỗi ngày (kcal) |

### Bảng `foods`
| Tên cột | Kiểu dữ liệu | Ràng buộc | Mô tả |
| :--- | :--- | :--- | :--- |
| `id` | SERIAL | PRIMARY KEY | Khóa chính món ăn |
| `name` | VARCHAR(150) | NOT NULL | Tên món ăn tiếng Việt |
| `category_id` | INT | FOREIGN KEY | Danh mục món ăn |
| `serving_unit`| VARCHAR(50) | NOT NULL | Đơn vị tính (1 tô, 1 đĩa, 100g, 1 phần) |
| `serving_weight_g`| DECIMAL(6,2)| DEFAULT 100.0 | Trọng lượng tương đương (gam) |
| `calories` | DECIMAL(6,2)| NOT NULL | Năng lượng (kcal) |
| `protein` | DECIMAL(5,2)| DEFAULT 0.0 | Lượng chất đạm (g) |
| `carbs` | DECIMAL(5,2)| DEFAULT 0.0 | Lượng tinh bột (g) |
| `fat` | DECIMAL(5,2)| DEFAULT 0.0 | Lượng chất béo (g) |
| `fiber` | DECIMAL(5,2)| DEFAULT 0.0 | Chất xơ (g) |

### Bảng `daily_meals`
| Tên cột | Kiểu dữ liệu | Ràng buộc | Mô tả |
| :--- | :--- | :--- | :--- |
| `id` | SERIAL | PRIMARY KEY | Khóa chính bữa ăn |
| `user_id` | INT / UUID | FOREIGN KEY (`users.id`) | Người dùng sở hữu |
| `meal_date` | DATE | NOT NULL | Ngày ghi nhận bữa ăn |
| `meal_type` | VARCHAR(20) | CHECK ('breakfast', 'lunch', 'dinner', 'snack') | Loại bữa ăn |
| `total_calories`| DECIMAL(7,2)| DEFAULT 0.0 | Tổng calo nạp vào bữa này |
