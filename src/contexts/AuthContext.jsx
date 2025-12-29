// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const stored = localStorage.getItem("smart_user");
//     if (stored) setUser(JSON.parse(stored));
//   }, []);

//   const login = (email, password) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const match = users.find(u => u.email === email && u.password === password);

//     if (!match) return { error: "Invalid credentials" };

//     localStorage.setItem("smart_user", JSON.stringify(match));
//     setUser(match);
//     return { success: true };
//   };

//   const logout = () => {
//     localStorage.removeItem("smart_user");
//     setUser(null);
//   };

//   const register = (email, password) => {
//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     if (users.some(u => u.email === email))
//       return { error: "User already exists" };

//     const newUser = { email, password };
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));

//     localStorage.setItem("smart_user", JSON.stringify(newUser));
//     setUser(newUser);

//     return { success: true };
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }


import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const register = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(u => u.email === cleanEmail)) {
      return { error: "User already exists" };
    }

    const newUser = { email: cleanEmail, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  };

  const login = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const match = users.find(
      u => u.email === cleanEmail && u.password === password
    );

    if (!match) return { error: "Invalid credentials" };

    localStorage.setItem("user", JSON.stringify(match));
    setUser(match);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
