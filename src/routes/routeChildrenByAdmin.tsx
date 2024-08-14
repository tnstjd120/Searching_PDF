import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import AdminDashboard from '@/pages/Admin/AdminDashboard';
import AuthAdminRoute from './AuthAdminRoute';
import AdminUsers from '@/pages/Admin/AdminUsers/AdminUsers';
import AdminUser from '@/pages/Admin/AdminUsers/AdminUser';
import AdminFeedbackDetail from '@/pages/Admin/AdminFeedback/AdminFeedbackDetail';
import AdminFeedback from '@/pages/Admin/AdminFeedback/AdminFeedback';

interface AddRouteObject {
  name?: string;
  isInNav?: boolean;
  onlyAdmin?: boolean;
}

interface ExtendedIndexRouteObject extends IndexRouteObject, AddRouteObject {}
interface ExtendedNonIndexRouteObject extends NonIndexRouteObject, AddRouteObject {
  children?: ExtendedRouteObject[];
}

type ExtendedRouteObject = ExtendedIndexRouteObject | ExtendedNonIndexRouteObject;

const routeChildrenByAdmin: ExtendedRouteObject[] = [
  {
    index: true,
    isInNav: true,
    name: 'Dashboard',
    element: (
      <AuthAdminRoute>
        <AdminDashboard />
      </AuthAdminRoute>
    ),
  },
  {
    isInNav: true,
    path: 'users',
    name: 'Users',
    element: (
      <AuthAdminRoute>
        <AdminUsers />
      </AuthAdminRoute>
    ),
  },
  {
    path: 'users/:userId',
    element: (
      <AuthAdminRoute>
        <AdminUser />
      </AuthAdminRoute>
    ),
  },
  {
    isInNav: true,
    path: 'feedback',
    name: 'Feedback',
    element: (
      <AuthAdminRoute>
        <AdminFeedback />
      </AuthAdminRoute>
    ),
  },
  {
    path: 'feedback/:feedbackId',
    element: (
      <AuthAdminRoute>
        <AdminFeedbackDetail />
      </AuthAdminRoute>
    ),
  },
];

export default routeChildrenByAdmin;
