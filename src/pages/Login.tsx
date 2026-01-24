
import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => login(email)}>Login</button>

      <p>Social Login</p>
      <button onClick={() => login("google@user.com")}>Google</button>
      <button onClick={() => login("facebook@user.com")}>Facebook</button>
      <button onClick={() => login("apple@user.com")}>Apple</button>
    </div>
  );
}
