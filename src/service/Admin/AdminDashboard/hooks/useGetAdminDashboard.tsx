import { useQuery } from '@tanstack/react-query';
import { getAdminDashboard } from '../api/get';
import { IDashboard } from '@/types/AdminDashboard';

const useGetAdminDashboard = () =>
  useQuery<IDashboard>({
    queryKey: ['adminDashboard'],
    queryFn: getAdminDashboard,
    refetchInterval: 1000 * 10,
    staleTime: 0,
  });

export default useGetAdminDashboard;
