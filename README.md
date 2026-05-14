# Configs - Utilities - Features

Chào mừng bạn đến với kho lưu trữ tổng hợp các cấu hình, tiện ích và tính năng phổ biến được sử dụng trong phát triển ứng dụng Web (Node.js, React, MongoDB). Repo này đóng vai trò như một bộ "cheatsheet" hoặc mã nguồn mẫu giúp bạn khởi tạo dự án nhanh chóng và duy trì các chuẩn code tốt nhất.

## 📂 Cấu trúc dự án

Repo được chia thành các thư mục chức năng riêng biệt:

- **`nodejs-express-mongodb`**: Project mẫu cho backend sử dụng Express và MongoDB.
- **`react-vite`**: Project mẫu cho frontend sử dụng Vite và React.
- **`Jwt`**: Cấu hình và xử lý JSON Web Token (Login, Refresh Token, Middleware).
- **`cloundinary`**: Tiện ích tích hợp Cloudinary để quản lý và upload hình ảnh.
- **`Brevo`**: Cấu hình gửi email thông qua dịch vụ Brevo (Sendinblue).
- **`Interceptors`**: Cấu hình Axios interceptors để xử lý request/response tập trung.
- **`cors`**: Các cấu hình CORS cho phép giao tiếp giữa frontend và backend.
- **`deploy`**: File cấu hình Nginx và các thiết lập triển khai dự án.
- **`eslint nodejs/react`**: Bộ quy tắc linter giúp chuẩn hóa code cho cả backend và frontend.
- **`mongoDB`**: Các helper kết nối và thao tác với cơ sở dữ liệu MongoDB.
- **`multer`**: Cấu hình middleware xử lý upload file.
- **`redux`**: Các mẫu triển khai quản lý state với Redux.
- **`formatters`**: Các hàm tiện ích để định dạng dữ liệu (ngày tháng, tiền tệ...).

## 🚀 Bắt đầu nhanh

### 1. Backend (Node.js)
```bash
cd nodejs-express-mongodb
npm install
npm run dev
```

### 2. Frontend (React)
```bash
cd react-vite
npm install
npm run dev
```

## 🛠 Công nghệ sử dụng
- **Backend**: Node.js, Express, Mongoose.
- **Frontend**: React, Vite.
- **Database**: MongoDB.
- **Services**: Cloudinary (Storage), Brevo (Email).
- **DevOps**: Nginx, ESLint.

## 📝 Ghi chú
- Hãy kiểm tra các file `.env` trong từng thư mục project để đảm bảo đã điền đầy đủ thông tin API Key hoặc kết nối DB.
- Repo này thường xuyên được cập nhật để bổ sung các tính năng mới.

---
*Created by [Nguyen An](https://github.com/nguyennan12)*
