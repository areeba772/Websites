import { createContext, useState } from "react";
import axios from "axios";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  const authHeaders = () => ({
    Authorization: `Bearer ${token}`,
  });

  const loginAdmin = async (email, password) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
      console.log("Attempting admin login with:", email);
      const { data } = await axios.post(`${apiUrl}/admin/login`, {
        email,
        password,
      });
      
      if (data.token) {
        setToken(data.token);
        localStorage.setItem("adminToken", data.token);
        console.log("Admin login successful");
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      console.error("Admin login error:", error.response?.data || error.message);
      throw error;
    }
  };

  const logoutAdmin = () => {
    setToken(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AdminContext.Provider
      value={{ token, authHeaders, loginAdmin, logoutAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
};
