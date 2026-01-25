
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || "null"));

  const login = (email: string) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
    window.location.href = "/"
  };
  const logout = (email: string) => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
