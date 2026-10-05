import React from 'react';
import { Layout, Avatar, Badge, Space, Button } from 'antd';
import { BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

export const Header: React.FC = () => {
  return (
    <AntHeader style={{ 
      padding: '0 24px', 
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'center',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <Space size="large">
        <Badge count={1} size="small">
          <BellOutlined style={{ fontSize: 18, cursor: 'pointer' }} />
        </Badge>
        <Space>
          <Avatar icon={<UserOutlined />} />
          <span>Евгений</span>
        </Space>
        <Button type="text" icon={<LogoutOutlined />} />
      </Space>
    </AntHeader>
  );
};