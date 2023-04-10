import React, { useEffect, useMemo, useState } from 'react';

export type DashboardContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn?: (arg: boolean) => void
};

export const DashboardContext = React.createContext<DashboardContextType>({
  isLoggedIn: false,
  setIsLoggedIn: undefined,
});

type DashboardProviderProps = { children: React.ReactNode };

function DashboardProvider({ children }: DashboardProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const stateValue = useMemo(() => ({
    isLoggedIn,
    setIsLoggedIn,
  }), [isLoggedIn, setIsLoggedIn]);

  useEffect(() => {
    const hasAuthentication = localStorage.getItem('username');

    if (hasAuthentication) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <DashboardContext.Provider
      value={stateValue}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
