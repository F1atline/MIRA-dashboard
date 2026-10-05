import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from '../widgets/Sidebar/Sidebar';
import { Header } from '../widgets/Header/Header';
import { FleetAudit } from '../pages/FleetAudit';
import { TireAccounting } from '../pages/TireAccounting';
import { TireCatalog } from '../pages/TireCatalog';
import { Reports } from '../pages/Reports';

const { Content } = Layout;

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout style={{ marginLeft: 240 }}>
          <Header />
          <Content style={{ margin: 24, padding: 24, background: '#fff', borderRadius: 8 }}>
            <Routes>
              <Route path="/" element={<Navigate to="/fleet-audit" replace />} />
              <Route path="/fleet-audit" element={<FleetAudit />} />
              <Route path="/tire-accounting" element={<TireAccounting />} />
              <Route path="/tire-catalog" element={<TireCatalog />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};