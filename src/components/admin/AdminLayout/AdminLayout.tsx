import { Outlet } from 'react-router-dom';
import AdminContent from '../AdminContent/AdminContent';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { StyledAdminLayout } from './AdminLayout.styled';

const AdminLayout = () => {
  return (
    <StyledAdminLayout>
      <AdminSidebar />

      <AdminContent>
        <Outlet />
      </AdminContent>
    </StyledAdminLayout>
  );
};

export default AdminLayout;
