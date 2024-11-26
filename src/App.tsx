import React from 'react';
import LogIn from './routes/LogIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GenericFooter from './components/GenericFooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
]);

const App: React.FC = () => {
  return (
    <div className={'h-screen bg-spotifyGray '}>
      <RouterProvider router={router} />;
        <GenericFooter/>
    </div>
  );
};

export default App;
