import { ConfigProvider, App as AntdApp, theme } from 'antd';
import React from 'react';
import 'antd/dist/reset.css';
import './global.css';

export function rootContainer(container: React.ReactNode) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#0a95ff',
          borderRadius: 6,
        },
      }}
    >
      <AntdApp>
        {container}
      </AntdApp>
    </ConfigProvider>
  );
}