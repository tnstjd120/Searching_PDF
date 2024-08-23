import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/get';
import { IUserResponse } from '@/types/User';

const useGetUsers = (numberPerPage: number, pageNumber: number) =>
  useQuery<IUserResponse>({
    queryKey: ['adminUsers', numberPerPage, pageNumber],
    queryFn: () => getUsers({ numberPerPage, pageNumber }),
  });

export default useGetUsers;
