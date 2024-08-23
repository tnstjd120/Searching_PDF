import Layout from '@/components/common/Layout';
import routeChildren from './routeChildren';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/pages/Unauthorized';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routeChildren,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />,
  },
]);

export default router;
