import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import Products from './pages/Products';
import NotFound from './pages/Page404';
import Word from './pages/Word';
import Excel from "./pages/Excel"
import Access from "./pages/Access"
import PowerPoint from "./pages/PowerPoint"
import Html from "./pages/html"
import Css from "./pages/Css"
import JavaScript from "./pages/JavaScript"
import ReactJS from "./pages/React"
import ReactNative from "./pages/ReactNative"
import Firebase from "./pages/FirebaseTutorials"
import Git from "./pages/Git"
import Aws from "./pages/Aws"
import Paypal from "./pages/Paypal"

export default function Router() {
  return useRoutes([
    {
      path: '/main',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/main/courses" replace /> },
        { path: 'courses', element: <Products /> },
        { path: '404', element: <NotFound /> }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/main/courses" /> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: '/word', element: <Word /> },
        { path: '/excel', element: <Excel /> },
        { path: '/access', element: <Access /> },
        { path: '/power', element: <PowerPoint /> },
        { path: '/html', element: <Html /> },
        { path: '/css', element: <Css /> },
        { path: '/java-script', element: <JavaScript /> },
        { path: '/react', element: <ReactJS /> },
        { path: '/react-native', element: <ReactNative /> },
        { path: '/firebase', element: <Firebase /> },
        { path: '/git', element: <Git /> },
        { path: '/aws', element: <Aws /> },
        { path: '/pay', element: <Paypal /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
