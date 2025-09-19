import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthContext = createContext();
axios.defaults.withCredentials = true; // send cookies

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((r) => setUser(r.data.user))
      .catch(() => {});
  }, []);
  const login = (credentials) =>
    axios
      .post("/api/auth/login", credentials)
      .then((r) => setUser(r.data.user));
  const logout = () => axios.post("/api/auth/logout").then(() => setUser(null));
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
