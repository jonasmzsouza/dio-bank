import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

type IAppContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsLoggedIn(login);
    }
  }, [storage]);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
