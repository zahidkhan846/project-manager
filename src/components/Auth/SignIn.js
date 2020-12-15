import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

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
    <div className="page-layout">
      <div className="container">
        <form onSubmit={handleSingInSubmit} className="form red lighten-5">
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
            <button disabled={loading} className="btn green darken-2">
              {loading ? "Logging In..." : "Sign In"}
            </button>
          </div>
          <div>
            <h6>
              Need an account? <Link to="/signup">Sign Up</Link>
            </h6>
          </div>
          <h6>
            Forgot password?
            <Link to="/forgot-password">Create New Password</Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
