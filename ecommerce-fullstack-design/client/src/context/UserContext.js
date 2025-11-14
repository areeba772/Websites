// src/context/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Stores all registered users
  const [currentUser, setCurrentUser] = useState(null); // Logged-in user

  // Register a new user
  const registerUser = (userData) => {
    const exists = users.find((u) => u.email === userData.email);
    if (exists) return false; // Email already registered

    setUsers([...users, userData]);
    setCurrentUser(userData); // Auto login after signup
    return true;
  };

  // Login existing user
  const loginUser = ({ email, password }) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) return false;

    setCurrentUser(user);
    return true;
  };

  // Logout
  const logoutUser = () => {
    setCurrentUser(null);
  };

  // Update profile
  const updateUser = (updatedData) => {
    setUsers(
      users.map((u) =>
        u.email === currentUser.email ? { ...u, ...updatedData } : u
      )
    );
    setCurrentUser({ ...currentUser, ...updatedData });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
