import { Link } from "react-router-dom";
import "../css/Form.css";

function SignInForm() {
  function signIn() {
    const navigate = useNavigate();
    navigate("/signIn");
  }
  return (
    <div className="sign-container">
      <div className="form-container">
        <div className="form main-form">
          <h2>Welcome back</h2>
          <p>Sign in to your account</p>

          <div className="form-tabs">
            <button onClick={signIn} className="active-tab">
              Sign In
            </button>
            <Link to="/signup">Sign Up</Link>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@gmail.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="•••••••••••"
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
