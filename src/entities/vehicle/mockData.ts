// src/entities/vehicle/mockData.ts
import type { Vehicle, FleetStats } from './types';

export const mockFleetStats: FleetStats = {
  totalVehicles: 1,
  totalKm: 6,
  lowPressure: 0,
  highPressure: 0,
  highTemp: 0,
  noData: 6,
  percentND: 100.0,
  vehiclesWithND: 1,
  lowBattery: 0,
};

export const mockVehicles: Vehicle[] = [
  {
    id: 1,
    subdivision: 'Карельский Окатыш, АО',
    type: 'truck',
    plateNumber: '069AA10',
    warnings: 6,
    rating: 'Н/Д',
    axleLoad: 'Н/Д',
    tireCondition: 'Н/Д',
    status: 'Н/Д',
    lastUpdate: '12.11.2024 в 05:16',
  },
];