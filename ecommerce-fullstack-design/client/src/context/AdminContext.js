// client/src/context/AdminContext.js
import React, { createContext, useState } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => {
    const raw = localStorage.getItem("adminData");
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState(
    () => localStorage.getItem("adminToken") || null
  );

  const save = (t, adminObj) => {
    setToken(t);
    setAdmin(adminObj);
    if (t) localStorage.setItem("adminToken", t);
    else localStorage.removeItem("adminToken");
    if (adminObj) localStorage.setItem("adminData", JSON.stringify(adminObj));
    else localStorage.removeItem("adminData");
  };

  const loginAdmin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });
      save(res.data.token, res.data.admin);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || err.message,
      };
    }
  };

  const logoutAdmin = () => {
    save(null, null);
  };

  const authHeaders = () => ({ Authorization: `Bearer ${token}` });

  return (
    <AdminContext.Provider
      value={{ admin, token, loginAdmin, logoutAdmin, authHeaders }}
    >
      {children}
    </AdminContext.Provider>
  );
};
