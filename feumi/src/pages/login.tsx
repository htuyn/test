import { App, Button, Card, Form, Input, Typography } from 'antd';
import { history } from 'umi';
import { authService } from '../services/auth';
  
export default function LoginPage() {
  // 2. Khai báo móc useApp() ở ngay dòng đầu tiên trong hàm
  const { message } = App.useApp();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        padding: 24,
      }}
    >
      <div
        onClick={() => history.push('/')}
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#001529',
          marginBottom: 24,
          cursor: 'pointer',
          userSelect: 'none',
          letterSpacing: '-0.5px',
        }}
      >
        UniBrain<span style={{ color: '#1890ff', fontWeight: 400 }}>.com</span>
      </div>

      <Card style={{ width: 380, borderRadius: 16, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}>
        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Đăng nhập UniBrain
          </Typography.Title>
          <Typography.Text type="secondary">Truy cập hệ thống hỏi đáp học tập</Typography.Text>
        </div>

        <Form
          layout="vertical"
          requiredMark={false}
          onFinish={async (values) => {
            try {
              await authService.login(values);
              message.success('Đăng nhập thành công');
              history.push('/questions');
            } catch (error) {
              console.error(error);
              message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.');
            }
          }}
        >
          <Form.Item
            name="email"
            label={
              <span style={{ fontWeight: 600, color: '#001529', fontSize: '0.95rem' }}>
                Email
              </span>
            }
            rules={[{ required: true, type: 'email', message: 'Vui lòng nhập Email hợp lệ' }]}
            style={{ marginBottom: 16 }}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <span style={{ fontWeight: 600, color: '#001529', fontSize: '0.95rem' }}>
                Mật khẩu
              </span>
            }
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            style={{ marginBottom: 24 }}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ height: 44, fontWeight: 600 }}>
              Đăng nhập
            </Button>
          </Form.Item>

          <div style={{ textAlign: 'center', marginTop: 12 }}>
            <Typography.Text>
              Chưa có tài khoản? <a onClick={() => history.push('/register')}>Đăng ký</a>
            </Typography.Text>
          </div>
        </Form>
      </Card>
    </div>
  );
}
