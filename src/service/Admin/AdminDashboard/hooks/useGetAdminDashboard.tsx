import { useQuery } from '@tanstack/react-query';
import { getAdminDashboard } from '../api/get';
import { IAdminDashboard } from '@/types/AdminDashboard';

const useGetAdminDashboard = () =>
  useQuery<IAdminDashboard>({
    queryKey: ['adminDashboard'],
    queryFn: getAdminDashboard,
    refetchInterval: 1000 * 10,
    staleTime: 0,
  });

export default useGetAdminDashboard;
