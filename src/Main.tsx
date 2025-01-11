/* eslint-disable no-undef */
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './main.css';
import { AuthContextProvider } from './contexts/AuthContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
