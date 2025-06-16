import { Link } from "react-router-dom";
import "../css/Form.css";

function SignUpForm() {
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

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="phone" id="phone" placeholder="07" required />
            </div>

            <button type="submit" className="btn-primary">
              Sign Up
            </button>
          </form>

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
