import UsersTable from '@/service/Admin/AdminUsers/components/UsersTable';
import { useNavigate } from 'react-router-dom';

const AdminUsers = () => {
  const navigate = useNavigate();

  return (
    <>
      <UsersTable />
    </>
  );
};

export default AdminUsers;
