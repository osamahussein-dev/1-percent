import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api";
import "../css/Form.css";

function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", form);
      navigate("/signin");
    } catch (err) {
      const msg = err.response?.data?.message;
      setError(msg);
    }
  };
  return (
    <div className="sign-container">
      <div className="form-container">
        <div className="form main-form">
          <h2>Create an account</h2>
          <p>Sign up to get started</p>

          <div className="form-tabs">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup" className="active-tab">
              Sign Up
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Osama Hussein"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="example@gmail.com"
                type="email"
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
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="07"
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              Sign Up
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

export default SignUpForm;
