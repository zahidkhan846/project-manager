import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgetPassword = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(email);
      history.replace("/signin");
    } catch {
      setError("Unable to change password");
    }
    setLoading(false);
  };

  return (
    <div className="page-layout">
      <div className="container">
        <form onSubmit={handleForgetPassword} className="form white">
          <h5 className="grey-text text-darken-2">Reset Password</h5>
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
            <button
              disabled={loading}
              className="btn  orange darken-4 z-depth-0"
              type="submit"
            >
              {loading ? "Check your mail" : "Reset Password"}
            </button>
          </div>
          <div className="card z-depth-0 orange lighten-5">
            <div className="card-action">
              <h6 className="blue-text">
                Go to your account? <Link to="/signin">Sign IN</Link>
              </h6>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
