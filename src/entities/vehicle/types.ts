// src/entities/vehicle/types.ts

export interface Vehicle {
  id: number;
  subdivision: string;       // Подразделение
  type: 'truck' | 'car';     // Тип ТС (грузовик/легковая)
  plateNumber: string;       // Номер ТС
  warnings: number;          // Количество предупреждений
  rating: 'Н/Д' | number;    // Рейтинг
  axleLoad: string;          // Нагрузка на ось (Н/Д)
  tireCondition: string;     // Состояние шин (Н/Д)
  status: string;            // Статус
  lastUpdate: string;        // Дата последнего обновления
}

export interface FleetStats {
  totalVehicles: number;
  totalKm: number;
  lowPressure: number;
  highPressure: number;
  highTemp: number;
  noData: number;
  percentND: number;
  vehiclesWithND: number;
  lowBattery: number;
}