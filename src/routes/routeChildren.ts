import Home from '@/pages/Home';
import Manual from '@/pages/Manual';
import SearchPdf from '@/pages/SearchPdf';
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';

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
    Component: Home,
    name: 'Home',
  },
  {
    isInNav: true,
    path: 'search/pdf',
    Component: SearchPdf,
    name: 'Search in PDF',
  },
  {
    isInNav: true,
    path: 'manual',
    Component: Manual,
    name: 'Manual',
  },
];

export default routeChildren;
