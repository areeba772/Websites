// client/src/components/admin/AdminLogin.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

export default function AdminLogin() {
  const { loginAdmin } = useContext(AdminContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const r = await loginAdmin(email, password);
    if (r.success) nav("/admin/dashboard");
    else alert(r.message || "Login failed");
  };

  return (
    <div className="container col-md-4 mt-5">
      <h3>Admin Login</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <input
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>
        <button className="btn btn-dark">Login</button>
      </form>
    </div>
  );
}
