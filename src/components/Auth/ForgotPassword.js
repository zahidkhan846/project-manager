import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Unable to change password");
    }
    setLoading(false);
  };

  return (
    <div className="page-layout">
      <div className="container">
        <form onSubmit={handleForgetPassword} className="form red lighten-5">
          <h5 className="grey-text text-darken-2">Reset Password</h5>
          {error ? (
            <p className="red-text">{error}</p>
          ) : (
            <p className="green-text">{message}</p>
          )}
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
            <button
              disabled={loading}
              className="btn red darken-2"
              type="submit"
            >
              {loading ? "Check your mail" : "Reset Password"}
            </button>
          </div>
          <div>
            <h6>
              Go to your account? <Link to="/signin">Sign In</Link>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
