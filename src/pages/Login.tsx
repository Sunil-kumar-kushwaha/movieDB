import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="login-btn" onClick={() => login(email)}> Login</button>
        <p className="login-social-text">Social Login</p>
        <button className="social-btn google" onClick={() => login("sunil@user.com")}>  Google</button>
        <button className="social-btn facebook" onClick={() => login("sunil@user.com")}>  Facebook</button>
        <button className="social-btn apple" onClick={() => login("sunil@user.com")}> Apple </button>
      </div>
    </div>
  );
}
