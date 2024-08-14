import DashboardLeft from '@/service/Admin/AdminDashboard/components/DashboardLeft';
import useGetAdminDashboard from '@/service/Admin/AdminDashboard/hooks/useGetAdminDashboard';
import { Box, Stack } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';

const AdminDashboard = () => {
  const { data, error } = useGetAdminDashboard();

  if (error) enqueueSnackbar('통계 데이터를 불러오는데 실패했습니다.', { variant: 'error' });

  useEffect(() => {
    if (data) {
      console.log('dashboard data: ', data);
    }
  }, [data]);

  return (
    <Stack direction="row" gap="20px" height="100%">
      <DashboardLeft />

      <Box sx={{ backgroundColor: '#fff', width: '100%', height: '100%', borderRadius: '4px' }}></Box>
    </Stack>
  );
};

export default AdminDashboard;
