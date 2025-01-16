import React from 'react';
import en from '../en.json';
import type { ReactElement } from 'react';

const GlobalFooter = (): ReactElement => {
  return (
    <footer className={'w-full p-3 text-center'}>
      <div className={'container mx-auto text-center text-spotifyWhite'}>
        <p className={'text-sm'}>{en.FOOTER_TEXT}</p>
      </div>
    </footer>
  );
};

export default GlobalFooter;
