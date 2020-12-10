import React, { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingInSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleSingInSubmit} className="form yellow lighten-2">
        <h5 className="grey-text text-darken-2">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn  orange darken-4 z-depth-0">Login</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
