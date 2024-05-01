import React, { createContext, useContext } from "react";

const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ children }) => {
  // Define your base URL here
  const ip = "192.168.137.1";
  const baseUrl = `http://${ip}:8000/`;

  return (
    <BaseUrlContext.Provider value={{baseUrl}}>
      {children}
    </BaseUrlContext.Provider>
  );
};

export const useBaseUrl = () => {
  return useContext(BaseUrlContext);
};
