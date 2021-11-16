import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import Products from './pages/Products';
// import Blog from './pages/Blog';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard/products" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
