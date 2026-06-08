import { Badge, Button, Popover, Space, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import { authService } from '../../services/auth';

interface HeaderProps {
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
  onHome: () => void;
}

export default function Header({ onLogin, onRegister, onLogout, onHome }: HeaderProps) {
  const user = authService.getUser();
  const unreadCount = 0;

  const notificationContent = useMemo(
    () => <div style={{ padding: 12 }}>Bạn không có thông báo mới</div>,
    [],
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderTop: '4px solid #f48225', borderBottom: '1px solid #e8eaee', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: 1264, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={onHome}>
          <Typography.Title level={4} style={{ margin: 0 }}>
            UniBrain <span style={{ fontWeight: 300, color: '#525960' }}>.com</span>
          </Typography.Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {user ? (
            <>
              <Popover title="Thông báo" content={notificationContent} trigger="click">
                <Badge count={unreadCount} offset={[0, 6]}>
                  <Button type="text" icon={<BellOutlined style={{ fontSize: 18 }} />} />
                </Badge>
              </Popover>
              <Typography.Text style={{ color: '#334155' }}>
                {user.fullName} ({user.role})
              </Typography.Text>
              <Button type="primary" onClick={onLogout}>
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
              <Button type="default" onClick={onLogin}>Đăng nhập</Button>
              <Button type="primary" onClick={onRegister}>Đăng ký</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
