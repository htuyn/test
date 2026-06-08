import { Button, Card, Form, Input, Radio, Typography } from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import { authService } from '../services/auth';

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: 48 }}>
      <Card style={{ width: 480, borderRadius: 16, boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}>
        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Đăng ký tài khoản
          </Typography.Title>
          <Typography.Text type="secondary">Bắt đầu tham gia cộng đồng hỏi đáp</Typography.Text>
        </div>
        <Form
          layout="vertical"
          initialValues={{ role: 'STUDENT' }}
          onFinish={async (values) => {
            setLoading(true);
            try {
              await authService.register(values);
              history.push('/questions');
            } catch (error) {
              console.error(error);
            } finally {
              setLoading(false);
            }
          }}
        >
          <Form.Item name="fullName" label="Họ và tên" rules={[{ required: true }]}>  
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>  
            <Input placeholder="Nhập email" />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, min: 6 }]}>  
            <Input.Password placeholder="Tối thiểu 6 ký tự" />
          </Form.Item>
          <Form.Item name="role" label="Vai trò" rules={[{ required: true }]}>  
            <Radio.Group options={[{ label: 'Sinh viên', value: 'STUDENT' }, { label: 'Giảng viên', value: 'LECTURER' }]} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Đăng ký
            </Button>
          </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Typography.Text>
              Đã có tài khoản? <a onClick={() => history.push('/login')}>Đăng nhập</a>
            </Typography.Text>
          </div>
        </Form>
      </Card>
    </div>
  );
}
