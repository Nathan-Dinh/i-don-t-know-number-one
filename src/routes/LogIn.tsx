import React from 'react';

const LogIn = () => {
  return (
    <div className={'flex h-4/6 flex-col place-items-center justify-center'}>
      <a
        href={'http://localhost:3000/login'}
        className={
          'w-80 rounded-spotify-rounded  bg-[#1A8F40] p-3 text-center text-xl font-bold transition-all duration-300 hover:bg-spotifyGreen hover:shadow-xl'
        }
      >
        Login in
      </a>
    </div>
  );
};

export default LogIn;
