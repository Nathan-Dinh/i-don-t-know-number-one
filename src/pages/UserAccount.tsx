import React from 'react';
import type { ReactElement } from 'react';

async function click(): Promise<void> {
  const response = await fetch('http://localhost:3000/v1/user/information', {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json();
  console.log(data);
}

const userAccount = (): ReactElement => {
  return (
    <a
      onClick={click}
      className={
        'w-80 rounded-spotify-rounded bg-[#1A8F40] p-3 text-center text-xl font-bold transition-all duration-300 hover:bg-spotifyGreen hover:shadow-xl'
      }
    >
      get account information
    </a>
  );
};

export default userAccount;
