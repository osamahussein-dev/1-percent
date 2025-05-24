import { Link } from "react-router-dom";

function HeaderLinks() {
  return (
    <ul className="header-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
}

export default HeaderLinks;
