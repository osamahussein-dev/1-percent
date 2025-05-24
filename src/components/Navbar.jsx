import HeaderLinks from "./HeaderLinks";
import TLIcon from "./TLIcon";
import RegularIcon from "./RegularIcon";
import "../css/nav.css";

function NavBar() {
  return (
    <div className="main-header">
      <div className="container container-header">
        <TLIcon />
        <HeaderLinks />
        <div className="icons-holder">
          <RegularIcon icon="search" />
          <RegularIcon icon="notification" />
          <RegularIcon icon="profile" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
