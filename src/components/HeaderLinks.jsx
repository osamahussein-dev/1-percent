import { NavLink } from "react-router-dom";

const HeaderLinks = ({ LinkName, path }) => {
  return <NavLink to={path}>{LinkName}</NavLink>;
};

export default HeaderLinks;
