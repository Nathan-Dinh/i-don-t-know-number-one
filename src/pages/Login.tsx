import type { ReactElement } from 'react';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useQuery } from 'react-query';
import useFetchSession from '../hooks/useFetchSession';

const Login = (): ReactElement => {
  const { isSessionActive } = useContext(AuthContext);
  return (
    <div className={'flex h-4/6 flex-col place-items-center justify-center'}>
      <a
        href={'http://localhost:3000/v1/session/login'}
        className={
          'w-80 rounded-spotify-rounded bg-[#1A8F40] p-3 text-center text-xl font-bold transition-all duration-300 hover:bg-spotifyGreen hover:shadow-xl'
        }
      >
        Login ind
      </a>

      <a
        className={
          'w-80 rounded-spotify-rounded bg-[#1A8F40] p-3 text-center text-xl font-bold transition-all duration-300 hover:bg-spotifyGreen hover:shadow-xl'
        }
      >
        check session
      </a>
    </div>
  );
};

export default Login;
