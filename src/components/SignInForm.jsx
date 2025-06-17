import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import "../css/Form.css";

function SignInForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post("/auth/login", form);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/home");
    } catch (err) {
      const msg = err.response?.data?.message;
      setError(msg);
    }
  };

  return (
    <div className="sign-container">
      <div className="form-container">
        <div className="form main-form">
          <h2>Welcome back</h2>
          <p>Sign in to your account</p>

          <div className="form-tabs">
            <button className="active-tab">Sign In</button>
            <Link to="/signup">Sign Up</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn-primary">
              Sign In
            </button>
          </form>

          {error && <p className="error-msg">{error}</p>}

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <button className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            <span>Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
