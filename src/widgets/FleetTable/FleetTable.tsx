// src/widgets/FleetTable/FleetTable.tsx
import React from 'react';
import { Table, Tag, Space, Typography} from 'antd';
import {
  CarOutlined,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { Vehicle } from '../../entities/vehicle/types';

const { Text, Title } = Typography;

interface Props {
  data: Vehicle[];
}

export const FleetTable: React.FC<Props> = ({ data }) => {
  const columns: ColumnsType<Vehicle> = [
    {
      title: '№',
      dataIndex: 'id',
      key: 'id',
      width: 60,
      align: 'center',
    },
    {
      title: 'Подразделение',
      dataIndex: 'subdivision',
      key: 'subdivision',
      width: 200,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      width: 80,
      align: 'center',
      render: (type: string) => (
        <CarOutlined style={{ fontSize: 20, color: '#595959' }} />
      ),
    },
    {
      title: 'Номер ТС',
      dataIndex: 'plateNumber',
      key: 'plateNumber',
      width: 120,
    },
    {
      title: 'Предупреждения',
      dataIndex: 'warnings',
      key: 'warnings',
      width: 150,
      align: 'center',
      render: (warnings: number) => (
        <Tag color={warnings > 0 ? 'red' : 'default'}>
          Нет данных {warnings}/6
        </Tag>
      ),
    },
    {
      title: 'Рейтинг',
      dataIndex: 'rating',
      key: 'rating',
      width: 100,
      align: 'center',
      render: (val: string | number) => (
        <Tag color="default">{val}</Tag>
      ),
    },
    {
      title: 'Н/Д',
      dataIndex: 'axleLoad',
      key: 'axleLoad',
      width: 80,
      align: 'center',
      render: (val: string) => <Tag color="default">{val}</Tag>,
    },
    {
      title: 'Состояние',
      dataIndex: 'tireCondition',
      key: 'tireCondition',
      width: 100,
      align: 'center',
      render: (val: string) => <Tag color="default">{val}</Tag>,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      width: 150,
      align: 'center',
      render: (val: string, record: Vehicle) => (
        <Space direction="vertical" size={0}>
          <Tag color="default">{val}</Tag>
          <Text type="secondary" style={{ fontSize: 11 }}>{record.lastUpdate}</Text>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={4} style={{ marginBottom: 16 }}>Аудит парка</Title>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={false}
        size="middle"
        bordered
        scroll={{ x: 1200 }}
      />
    </div>
  );
};