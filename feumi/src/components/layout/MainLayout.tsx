import { useMemo } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'umi';
import Footer from './Footer';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import { authService } from '../../services/auth';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const user = authService.getUser();

  const selectedKey = useMemo(() => {
    const path = location.pathname;
    if (path.startsWith('/admin/users')) return '/admin/users';
    if (path.startsWith('/admin/posts')) return '/admin/posts';
    if (path.startsWith('/ask')) return '/ask';
    return '/';
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>
      <Header
        onHome={() => navigate('/')}
        onLogin={() => navigate('/login')}
        onRegister={() => navigate('/register')}
        onLogout={() => { authService.clearSession(); navigate('/login'); }}
      />
      <div style={{ display: 'flex', maxWidth: 1264, margin: '0 auto' }}>
        <SidebarLeft selectedKey={selectedKey} onSelect={(key) => navigate(key)} isAdmin={Boolean(user?.role === 'ADMIN')} />
        <main style={{ flex: 1, padding: '24px 24px 0' }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
