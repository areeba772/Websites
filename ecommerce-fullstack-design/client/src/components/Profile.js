// src/components/Profile.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { currentUser, updateUser, logoutUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    password: currentUser?.password || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert("Profile updated successfully!");
  };

  if (!currentUser) {
    return (
      <div className="container mt-5">
        <h3>Please login to view your profile.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Profile</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success me-2">
          Update Profile
        </button>

        <button type="button" className="btn btn-danger" onClick={logoutUser}>
          Logout
        </button>
      </form>
    </div>
  );
};

export default Profile;
