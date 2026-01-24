
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "null"));

  const login = (email: string) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
