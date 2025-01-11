import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
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
    path: '/login',
    element: <Login />,
  },
]);

export default AppRouter;
