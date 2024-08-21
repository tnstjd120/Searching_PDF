import { Skeleton, Stack, styled } from '@mui/material';
import { IDashboard } from '@/types/AdminDashboard';
import React from 'react';
import TotalChartCard from './TotalChartCard';
import AverageChartCard from './AverageChartCard';
import { BarDatum } from '@nivo/bar';

interface IDataPoint {
  x: string;
  y: number;
}

interface IAverageData {
  id: string;
  color: string;
  data: IDataPoint[];
}

interface IDahsboardRight extends Omit<IDashboard, 'today'> {
  isSkeleton?: boolean;
}

const DashboardRight = ({ month, arrayTotal, isSkeleton }: IDahsboardRight) => {
  const { totalData, averageData } = arrayTotal.reduce<{ totalData: BarDatum[]; averageData: IAverageData[] }>(
    (acc, cur) => {
      acc.totalData.push({
        title: cur.opDt.slice(-2),
        question: cur.totalQuCnt,
        feedback: cur.totalFeCnt,
        opDt: cur.opDt,
      });

      acc.averageData[0].data.push({ x: cur.opDt.slice(-2), y: cur.userQuAverage });
      acc.averageData[1].data.push({ x: cur.opDt.slice(-2), y: cur.userFeAverage });
      acc.averageData[2].data.push({ x: cur.opDt.slice(-2), y: cur.QuFeAverage });

      return { totalData: [...acc.totalData], averageData: [...acc.averageData] };
    },
    {
      totalData: [],
      averageData: [
        {
          id: 'averageQuestion',
          color: '#49a2fa',
          data: [],
        },
        {
          id: 'averageFeedback',
          color: '#f46868',
          data: [],
        },
        {
          id: 'feedbackPerQuestion',
          color: 'green',
          data: [],
        },
      ],
    },
  );

  if (isSkeleton) {
    return (
      <StyledDashboardRight>
        <Skeleton variant="rounded" sx={{ width: '100%', height: '100%' }} />
        <Skeleton variant="rounded" sx={{ width: '100%', height: '100%' }} />
      </StyledDashboardRight>
    );
  }

  return (
    <StyledDashboardRight>
      <TotalChartCard data={totalData} />
      <AverageChartCard data={averageData} />
    </StyledDashboardRight>
  );
};

export default React.memo(DashboardRight);

const StyledDashboardRight = styled(Stack)`
  gap: 20px;
  width: 100%;
  height: 100%;
`;
