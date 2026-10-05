// src/pages/FleetAudit.tsx
import React from 'react';
import { Layout } from 'antd';
import { FleetStats } from '../widgets/FleetStats/FleetStats';
import { FleetTable } from '../widgets/FleetTable/FleetTable';
import { mockFleetStats, mockVehicles } from '../entities/vehicle/mockData';

const { Content } = Layout;

export const FleetAudit: React.FC = () => {
  return (
    <Content>
      <FleetStats stats={mockFleetStats} />
      <FleetTable data={mockVehicles} />
    </Content>
  );
};