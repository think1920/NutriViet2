# NutriViet3 - Hệ Thống Quản Lý Dinh Dưỡng & Khẩu Phần Ăn Người Việt

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status: In-Progress](https://img.shields.io/badge/Status-In--Progress-orange.svg)]()
[![GitFlow](https://img.shields.io/badge/Workflow-GitFlow-brightgreen.svg)]()

> **NutriViet3** là giải pháp phần mềm hỗ trợ người dùng Việt Nam theo dõi dinh dưỡng hằng ngày, tính toán calo và vi chất dựa trên dữ liệu món ăn Việt Nam truyền thống và hiện đại, đồng thời đưa ra gợi ý thực đơn phù hợp với thể trạng, mục tiêu sức khỏe và lối sống.

---

## 📁 Cấu Trúc Dự Án (Repository Structure)

Dự án được cấu trúc theo chuẩn quy trình phát triển phần mềm (Software Engineering Project Standard):

```text
NutriViet3/
├── .gitignore                      # Danh sách file/thư mục bỏ qua khi commit
├── README.md                       # Tài liệu tổng quan và hướng dẫn dự án
├── src/                            # SOURCE CODE CHÍNH
│   ├── README.md                   # Hướng dẫn cấu trúc mã nguồn
│   ├── package.json                # Khai báo phụ thuộc dự án (Dependencies)
│   └── index.js                    # Mã nguồn khởi tạo backend demo
├── docs/                           # TÀI LIỆU DỰ ÁN (DOCUMENTATION)
│   ├── README.md                   # Mục lục tài liệu
│   ├── project-overview.md         # Tổng quan dự án và bài toán
│   ├── coding-standards.md         # Chuẩn viết mã và Git commit
│   └── user-guide.md               # Hướng dẫn sử dụng hệ thống
├── management/                     # QUẢN LÝ DỰ ÁN (PLANNING & REPORTS)
│   ├── README.md                   # Hướng dẫn quy trình quản lý
│   ├── project-plan.md             # Kế hoạch dự án, phân bổ WBS, Timeline
│   ├── risk-management.md          # Ma trận quản lý rủi ro
│   ├── weekly-reports/             # Báo cáo hàng tuần (Weekly Reports)
│   │   ├── weekly-report-template.md
│   │   └── week-01-report.md
│   └── status-reports/             # Báo cáo trạng thái dự án (Status Reports)
│       └── project-status-report.md
├── requirements/                   # TÀI LIỆU YÊU CẦU (REQUIREMENTS)
│   ├── README.md                   # Danh mục yêu cầu
│   ├── vision-document.md          # Tài liệu tầm nhìn sản phẩm
│   ├── software-requirements-specification.md # Đặc tả yêu cầu phần mềm (SRS)
│   └── use-cases/                  # Danh mục và chi tiết các Use Case
│       ├── use-case-spec-template.md
│       ├── UC01-user-authentication.md
│       ├── UC02-daily-nutrition-tracking.md
│       └── UC03-meal-recommendation.md
├── analysis-and-design/            # PHÂN TÍCH VÀ THIẾT KẾ (ANALYSIS & DESIGN)
│   ├── README.md                   # Danh mục phân tích & thiết kế
│   ├── software-architecture-document.md # Tài liệu kiến trúc phần mềm (SAD)
│   ├── database-design.md          # Thiết kế lược đồ CSDL
│   ├── diagrams/                   # Sơ đồ kiến trúc, sơ đồ lớp, ERD
│   │   ├── README.md
│   │   ├── system-architecture.mermaid
│   │   └── database-erd.mermaid
│   └── ui-design/                  # Thiết kế giao diện người dùng
│       ├── README.md
│       ├── ui-design-specification.md
│       └── wireframes-and-mockups.md
└── test/                           # KIỂM THỬ (TEST PLAN, CASES & REPORTS)
    ├── README.md                   # Quy trình kiểm thử
    ├── test-plan.md                # Kế hoạch kiểm thử tổng thể
    ├── test-cases/                 # Danh sách ca kiểm thử chi tiết
    │   ├── test-cases-template.md
    │   └── TC-auth-and-tracking.md
    └── test-reports/               # Báo cáo kết quả kiểm thử
        ├── test-report-template.md
        └── test-execution-report-sprint-1.md
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Thử

### Yêu cầu hệ thống:
- **Node.js**: >= 18.x
- **Git**: >= 2.x

### Cài đặt:
```bash
# 1. Di chuyển vào thư mục mã nguồn
cd src

# 2. Cài đặt các gói phụ thuộc
npm install

# 3. Chạy môi trường phát triển
npm run dev
```

---

## 🔗 Hướng Dẫn Đẩy Lên GitHub

Nếu bạn muốn liên kết thư mục này với repository mới trên GitHub:

```bash
# Di chuyển vào thư mục NutriViet3
cd NutriViet3

# Khởi tạo git (nếu chưa có)
git init -b main

# Thêm tất cả tập tin
git add .
git commit -m "feat: initialize NutriViet3 repository structure with full documentation"

# Tạo remote và push lên GitHub (thay <your-username> bằng tài khoản GitHub của bạn)
git remote add origin https://github.com/<your-username>/NutriViet3.git
git branch -M main
git push -u origin main
```

---

## 👥 Thành Viên Nhóm & Phân Công

| STT | Họ và Tên | Vai trò | Trách nhiệm chính |
| :---: | :--- | :--- | :--- |
| 1 | Nguyễn Văn A | Project Manager | Quản lý tiến độ, rủi ro, phân bổ tài nguyên |
| 2 | Trần Thị B | Business Analyst | Thu thập yêu cầu, viết SRS, Vision, Use Cases |
| 3 | Lê Văn C | Software Architect | Thiết kế kiến trúc SAD, ERD, Schema CSDL |
| 4 | Phạm Thị D | Fullstack Developer | Xây dựng mã nguồn tại `/src` |
| 5 | Hoàng Văn E | QA / Tester | Xây dựng Test Plan, Test Cases, Báo cáo kiểm thử |

---
*© 2026 NutriViet3 Team. All rights reserved.*
