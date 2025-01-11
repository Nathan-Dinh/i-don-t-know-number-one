import type { ReactElement } from 'react';
import React, { createContext, useEffect, useState } from 'react';
import useFetchSession from '../hooks/useFetchSession';

//Creates context
const AuthContext = createContext({
  isSessionActive: false as boolean,
  // isLoading: false as boolean,
  // sessionCheck: () => {},
});

//Create react component wrapper
const AuthContextProvider = (prop: React.PropsWithChildren): ReactElement => {
  const { data, isLoading } = useFetchSession();
  const [isSessionActive, setIsSessionActive] = useState();

  useEffect(() => {
    if (!isLoading) {
      setIsSessionActive(data);
    }
  }, [isLoading]);
  return (
    <AuthContext.Provider value={{ isSessionActive: isSessionActive as any }}>
      {prop.children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };
