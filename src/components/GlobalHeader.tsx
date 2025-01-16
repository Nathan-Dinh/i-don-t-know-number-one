import React, { useContext } from 'react';
import type { ReactElement } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const GlobalHeader = (): ReactElement => {
  const { isSessionActive } = useContext(AuthContext);
  return (
    <header
      className={
        'py-5 px-10 flex justify-between text-spotifyWhite bg-spotifyBlack'
      }
    >
      <div>
        <h1 className={'font-bold text-xl'}>IDK_ONE_PROJECT</h1>
      </div>
      <div>
        <button className={'p-2 px-10 font-semibold rounded bg-spotifyGreen'}>
          {isSessionActive ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default GlobalHeader;
