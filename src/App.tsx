import React from 'react';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GenericFooter from './components/GenericFooter';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => {
  return (
    <div className={'h-screen bg-spotifyGray '}>
      <RouterProvider router={AppRouter} />;
      <GenericFooter />
    </div>
  );
};

export default App;
