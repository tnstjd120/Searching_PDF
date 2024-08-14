export interface IDailyStatistics {
  opDt: string;
  totalQuCnt: number;
  totalFeCnt: number;
  userQuAverage: number;
}

export interface IAdminDashboard {
  thisMonth: number;
  thisMonthTotalQuCnt: number;
  thisMonthTotalFeCnt: number;
  arrayTotal: IDailyStatistics[];
}
