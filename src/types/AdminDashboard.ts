export interface IDailyStatistics {
  opDt: string;
  totalQuCnt: number;
  totalFeCnt: number;
  userQuAverage: number;
  userFeAverage: number;
  QuFeAverage: number;
}

export interface IMonthStatistics {
  thisMonth: number;
  thisMonthTotalQuCnt: number;
  thisMonthTotalFeCnt: number;
}

export interface ITodayStatistics extends Omit<IDailyStatistics, 'opDt' | 'QuFeAverage'> {}

export interface IDashboard {
  today: Omit<IDailyStatistics, 'opDt'>;
  month: IMonthStatistics;
  arrayTotal: IDailyStatistics[];
}
