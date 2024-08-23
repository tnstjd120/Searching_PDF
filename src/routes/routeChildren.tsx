import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Logout from '@/pages/Logout';
import SearchPdf from '@/pages/SearchPdf';
import AuthRoute from './AuthRoute';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout/AdminLayout';
import routeChildrenByAdmin from './routeChildrenByAdmin';

interface AddRouteObject {
  name?: string;
  isInNav?: boolean;
  onlyAdmin?: boolean;
}

interface ExtendedIndexRouteObject extends IndexRouteObject, AddRouteObject {}
interface ExtendedNonIndexRouteObject extends NonIndexRouteObject, AddRouteObject {}

type ExtendedRouteObject = ExtendedIndexRouteObject | ExtendedNonIndexRouteObject;

const routeChildren: ExtendedRouteObject[] = [
  {
    isInNav: true,
    onlyAdmin: true,
    path: 'admin',
    name: 'Admin',
    element: <AdminLayout />,
    children: routeChildrenByAdmin,
  },
  {
    index: true,
    isInNav: true,
    name: 'Home',
    element: (
      <AuthRoute>
        <Home />
      </AuthRoute>
    ),
  },
  {
    isInNav: true,
    path: 'search/pdf',
    name: 'Chat',
    element: (
      <AuthRoute>
        <SearchPdf />
      </AuthRoute>
    ),
  },
  {
    isInNav: true,
    path: 'login',
    name: 'Login',
    element: <Login />,
  },
  {
    isInNav: true,
    path: 'logout',
    name: 'Logout',
    element: <Logout />,
  },
];

export default routeChildren;
