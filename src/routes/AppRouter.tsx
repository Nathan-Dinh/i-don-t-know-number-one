import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import UserAccount from '../pages/UserAccount';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <UserAccount />,
      },
    ],
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
]);

export default AppRouter;
