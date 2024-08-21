import DashboardLeft from '@/service/Admin/AdminDashboard/components/DashboardLeft';
import DashboardRight from '@/service/Admin/AdminDashboard/components/DashboardRight';
import useGetAdminDashboard from '@/service/Admin/AdminDashboard/hooks/useGetAdminDashboard';
import { Stack } from '@mui/material';
import { enqueueSnackbar } from 'notistack';

const AdminDashboard = () => {
  const { data, isLoading, error } = useGetAdminDashboard();

  if (error) enqueueSnackbar('통계 데이터를 불러오는데 실패했습니다.', { variant: 'error' });

  const defaultData = {
    today: { totalFeCnt: 0, totalQuCnt: 0, userFeAverage: 0, userQuAverage: 0 },
    month: { thisMonth: 0, thisMonthTotalQuCnt: 0, thisMonthTotalFeCnt: 0 },
    arrayTotal: [],
  };
  const { today, ...other } = data || defaultData;

  return (
    <Stack direction="row" gap="20px" height="100%">
      <DashboardLeft {...today} isSkeleton={isLoading} />
      <DashboardRight {...other} isSkeleton={isLoading} />
    </Stack>
  );
};

export default AdminDashboard;
