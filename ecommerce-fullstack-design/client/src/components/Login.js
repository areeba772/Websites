import React, { useState } from "react";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Integrate with backend auth later
    alert(isSignup ? "Signup successful!" : "Login successful!");
  };

  return (
    <div className="container mt-4">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      <button className="btn btn-link" onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Already have an account? Login" : "New user? Sign Up"}
      </button>
    </div>
  );
}

export default Login;
