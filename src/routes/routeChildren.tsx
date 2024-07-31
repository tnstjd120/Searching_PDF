import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Logout from '@/pages/Logout';
import Manual from '@/pages/Manual';
import SearchPdf from '@/pages/SearchPdf';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import AuthRoute from './AuthRoute';

interface AddRouteObject {
  name?: string;
  isInNav?: boolean;
}

interface ExtendedIndexRouteObject extends IndexRouteObject, AddRouteObject {}
interface ExtendedNonIndexRouteObject extends NonIndexRouteObject, AddRouteObject {}

type ExtendedRouteObject = ExtendedIndexRouteObject | ExtendedNonIndexRouteObject;

const routeChildren: ExtendedRouteObject[] = [
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
    name: 'Search in PDF',
    element: (
      <AuthRoute>
        <SearchPdf />
      </AuthRoute>
    ),
  },
  {
    isInNav: true,
    path: 'manual',
    name: 'Manual',
    element: (
      <AuthRoute>
        <Manual />
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
