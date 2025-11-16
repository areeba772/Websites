// src/components/Profile.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          <h3>Please login to view your profile.</h3>
          <button className="btn btn-primary mt-2" onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title mb-4">User Profile</h2>
              
              <div className="mb-4">
                <h5>Account Information</h5>
                <hr />
                <div className="mb-3">
                  <label className="form-label fw-bold">Full Name:</label>
                  <p className="form-control-plaintext">{user.name}</p>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Email:</label>
                  <p className="form-control-plaintext">{user.email}</p>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">User ID:</label>
                  <p className="form-control-plaintext text-muted small">{user._id}</p>
                </div>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate("/products")}
                >
                  Continue Shopping
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
