import React from 'react';

const GenericFooter = () => {
  return (
    <footer className={'absolute bottom-0 w-full p-3 text-center'}>
      <div className={'container mx-auto text-center text-spotifyWhite'}>
        <p className={'text-sm'}>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default GenericFooter;
