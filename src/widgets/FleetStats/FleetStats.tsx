// src/widgets/FleetStats/FleetStats.tsx
import React from 'react';
import { Card, Row, Col, Typography, Space, Tag } from 'antd';
import {
  CarOutlined,
  DashboardOutlined,
  WarningOutlined,
  FireOutlined,
  QuestionCircleOutlined,
  PercentageOutlined,
  AlertOutlined,
} from '@ant-design/icons';
import type { FleetStats as FleetStatsType } from '../../entities/vehicle/types';

const { Text, Title } = Typography;

interface Props {
  stats: FleetStatsType;
}

export const FleetStats: React.FC<Props> = ({ stats }) => {
  const items = [
    { label: 'Всего', value: `${stats.totalVehicles} ТС`, icon: <CarOutlined />, color: '#52c41a' },
    { label: 'Всего КМ', value: stats.totalKm, icon: <DashboardOutlined />, color: '#faad14', warning: true },
    { label: 'Низкое давление', value: stats.lowPressure, icon: <WarningOutlined />, color: '#ff4d4f' },
    { label: 'Высокое давление', value: stats.highPressure, icon: <AlertOutlined />, color: '#ff4d4f' },
    { label: 'Высокая температура', value: stats.highTemp, icon: <FireOutlined />, color: '#ff4d4f' },
    { label: 'Нет данных', value: stats.noData, icon: <QuestionCircleOutlined />, color: '#ff4d4f' },
    { label: '% Н/Д', value: stats.percentND.toFixed(1), icon: <PercentageOutlined />, color: '#ff4d4f' },
    { label: 'ТС с Н/Д', value: stats.vehiclesWithND, icon: <CarOutlined />, color: '#ff4d4f' },
  ];

  return (
    <Card style={{ marginBottom: 16 }} bodyStyle={{ padding: '16px 24px' }}>
      <Row gutter={[16, 16]} align="middle">
        {items.map((item, idx) => (
          <Col key={idx} xs={12} sm={8} md={6} lg={3}>
            <Space direction="vertical" size={2} style={{ width: '100%' }}>
              <Text type="secondary" style={{ fontSize: 12 }}>{item.label}</Text>
              <Space>
                <span style={{ color: item.color, fontSize: 18 }}>{item.icon}</span>
                <Title level={4} style={{ margin: 0, color: item.warning ? '#ff4d4f' : undefined }}>
                  {item.value}
                </Title>
              </Space>
            </Space>
          </Col>
        ))}
      </Row>

      {/* Большой красный круг "F 0" - как на скриншоте */}
      <div style={{ position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)' }}>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: '#ff4d4f',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          F 0
        </div>
      </div>

      {/* Нижний ряд: низкий заряд батареи */}
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        <Text type="secondary" style={{ fontSize: 12 }}>Низкий заряд батареи</Text>
        <Tag color="red" style={{ margin: 0 }}>{stats.lowBattery}</Tag>
      </div>
    </Card>
  );
};