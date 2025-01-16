import React from 'react';
import GlobalFooter from './components/GlobalFooter';
import GlobalHeader from './components/GlobalHeader';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

const App: React.FC = () => {
  return (
    <div className={' bg-spotifyGray h-full'}>
      <GlobalHeader />
      <RouterProvider router={AppRouter} />
      <GlobalFooter />
    </div>
  );
};

export default App;
