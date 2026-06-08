import { Navigate, Outlet } from 'umi';
import { authService } from '../services/auth';

export default function RequireAuth() {
  const token = authService.getToken();

  // Nếu không có token, lập tức điều hướng về trang đăng nhập
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Nếu hợp lệ, render component con (ví dụ: trang /ask)
  return <Outlet />;
}