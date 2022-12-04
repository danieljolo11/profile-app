import React, { createContext, useContext, useMemo } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const token = true;

  const memoedValue = useMemo(
    () => ({
      token,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
