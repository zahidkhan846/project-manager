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
            <button
              disabled={loading}
              className="btn  orange darken-4 z-depth-0"
            >
              {loading ? "Logging In..." : "Sign In"}
            </button>
          </div>
          <div className="card z-depth-0 orange lighten-5">
            <div className="card-action">
              <h6 className="blue-text">
                Need an account? <Link to="/signup">Sign Up</Link>
              </h6>
            </div>
          </div>
          <p className="black-text">
            Forgaot Password?{" "}
            <Link to="/forgot-password">Create New Password</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
