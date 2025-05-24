import { Link } from "react-router-dom";
import "../css/nav.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
