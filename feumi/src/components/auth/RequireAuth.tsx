import type { PropsWithChildren } from 'react';
import { history } from 'umi';
import type { Role } from '../../models/auth';
import { authService } from '../../services/auth';

export function RequireAuth({ children, roles }: PropsWithChildren<{ roles?: Role[] }>) {
  const token = authService.getToken();
  const user = authService.getUser();

  if (!token) {
    history.replace('/login');
    return null;
  }

  if (roles && (!user || !roles.includes(user.role))) {
    history.replace('/');
    return null;
  }

  return <>{children}</>;
}
