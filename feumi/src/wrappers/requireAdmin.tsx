import { Navigate, Outlet } from 'umi';
import { authService } from '../services/auth';

export default function RequireAdmin() {
  const token = authService.getToken();
  const user = authService.getUser();

  // Chưa đăng nhập thì về trang đăng nhập
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Nếu không có thông tin user hoặc không phải ADMIN thì đẩy về trang chủ
  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/" replace />;
  }

  // Nếu là ADMIN, cho phép hiển thị nội dung trang quản trị
  return <Outlet />;
}