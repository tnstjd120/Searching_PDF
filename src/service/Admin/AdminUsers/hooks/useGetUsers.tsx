import { useQuery } from '@tanstack/react-query';
import { IDashboard } from '@/types/AdminDashboard';
import { getUsers } from '../api/get';

const useGetUsers = () =>
  useQuery<IDashboard>({
    queryKey: ['adminUsers'],
    queryFn: getUsers,
  });

export default useGetUsers;
