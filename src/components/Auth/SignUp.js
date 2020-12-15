import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUp() {
  const { signUp } = useContext(AuthContext);

  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSingUpSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Passowrd do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password);
      history.replace("/");
    } catch {
      setError("Failed to craeate an account");
    }
    setLoading(false);
  };

  return (
    <div className="page-layout">
      <div className="container">
        <form onSubmit={handleSingUpSubmit} className="form red lighten-5">
          <h5 className="grey-text text-darken-2">Sign Up</h5>
          {error && <p>{error}</p>}
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-field">
            <button disabled={loading} className="btn btn green darken-2">
              {loading ? "Creating New Account..." : "Create New Account"}
            </button>
          </div>
          <div>
            <h6>
              Already have account? <Link to="/signin">Sign In</Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
