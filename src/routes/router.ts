import Layout from '@/components/common/Layout';
import routeChildren from './routeChildren';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: routeChildren,
  },
]);

export default router;
