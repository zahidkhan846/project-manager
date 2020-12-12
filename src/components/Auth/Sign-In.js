import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SignIn() {
  const { signIn } = useContext(AuthContext);

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingInSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signIn(email, password);
      history.replace("/");
    } catch {
      setError("Unable to sign in");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSingInSubmit} className="form white">
        <h5 className="grey-text text-darken-2">Sign In</h5>
        {error ? <p>{error}</p> : ""}
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
          <button disabled={loading} className="btn  orange darken-4 z-depth-0">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
