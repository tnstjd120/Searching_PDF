import { Skeleton, Stack } from '@mui/material';
import TodayCard from './TodayCard';
import { ITodayStatistics } from '@/types/AdminDashboard';
import React, { useEffect } from 'react';

interface IDashboardLeft extends ITodayStatistics {
  isSkeleton?: boolean;
}

const DashboardLeft = ({
  totalQuCnt,
  totalFeCnt,
  userQuAverage,
  userFeAverage,
  isSkeleton = false,
}: IDashboardLeft) => {
  useEffect(() => {
    console.log('isSkeleton: ', isSkeleton);
  }, [isSkeleton]);

  if (isSkeleton) {
    return (
      <Stack gap="20px" flex="1" height="100%">
        <Skeleton variant="rounded" sx={{ width: '150px', flex: 1 }} />
        <Skeleton variant="rounded" sx={{ width: '150px', flex: 1 }} />
        <Skeleton variant="rounded" sx={{ width: '150px', flex: 1 }} />
        <Skeleton variant="rounded" sx={{ width: '150px', flex: 1 }} />
      </Stack>
    );
  }

  return (
    <Stack gap="20px" flex="1">
      <TodayCard title={totalQuCnt} caption="질문 수" textColor="#49a2fa" />
      <TodayCard title={totalFeCnt} caption="피드백 수" textColor="#f46868" />
      <TodayCard title={userQuAverage} caption="유저 평균 질문 수" textColor="#49a2fa" />
      <TodayCard title={userFeAverage} caption="유저 평균 피드백 수" textColor="#f46868" />
    </Stack>
  );
};

export default React.memo(DashboardLeft);
