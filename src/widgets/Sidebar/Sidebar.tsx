import React from 'react';
import { Layout, Menu } from 'antd';
import {
  CarOutlined,
  AppstoreOutlined,
  ApartmentOutlined,
  BookOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const menuItems = [
  { key: '/fleet-audit', icon: <CarOutlined />, label: 'Аудит парка' },
  { key: '/tire-accounting', icon: <AppstoreOutlined />, label: 'Учет шин' },
  { key: '/departments', icon: <ApartmentOutlined />, label: 'Подразделения' },
  { key: '/tire-catalog', icon: <BookOutlined />, label: 'Каталог шин' },
  { key: '/reports', icon: <FileTextOutlined />, label: 'Отчеты' },
];

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sider width={240} style={{ height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
      <div style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>
        MIRA
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{ borderRight: 0 }}
      />
    </Sider>
  );
};