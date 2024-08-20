import { Table } from '@mui/material';
import useGetUsers from '../hooks/useGetUsers';
import { useEffect } from 'react';

const UsersTable = () => {
  const { data, error } = useGetUsers();

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return <Table></Table>;
};

export default UsersTable;
