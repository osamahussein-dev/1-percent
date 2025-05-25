import "../css/nav.css";
import { useState } from "react";
import {
  HiHome,
  HiOutlineHome,
  HiBookmark,
  HiOutlineBookmark,
  HiBell,
  HiOutlineBell,
} from "react-icons/hi";
import Icon from "./Icon";
import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import ProfileImg from "./ProfileImg";
import HeaderLinks from "./HeaderLinks";
import ProfileDropdown from "./ProfileDropdown";

function NavBar() {
  const [active, setActive] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const url = ["/explore", "/mycards", "/profile"];
  const conditionalLoc = url.includes(location.pathname);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="container container-header">
        <nav>
          <div className="logo-bar">
            <img
              src="/1percent.png"
              alt="logo"
              className="w-[60px] md:w-[100px]"
            />

            {conditionalLoc ? (
              <div className="gap-4 hidden md:flex">
                <HeaderLinks path={"/home"} LinkName={"Home"} />
                <HeaderLinks path={"/explore"} LinkName={"Explore"} />
                <HeaderLinks path={"/mycards"} LinkName={"My Cards"} />
              </div>
            ) : (
              <div className="search-bar hidden md:inline-block">
                <input type="text" placeholder="Type What You Want" />
                <div className="icon-cover">
                  <BiSearch className="search-icon" />
                </div>
              </div>
            )}
          </div>

          <div className="profile-tools">
            <div className="icons">
              <Icon
                FilledIcon={HiHome}
                OutlinedIcon={HiOutlineHome}
                isActive={active === "home"}
                onClick={() => setActive("home")}
              />
              <Icon
                FilledIcon={HiBell}
                OutlinedIcon={HiOutlineBell}
                isActive={active === "notif"}
                onClick={() => setActive("notif")}
              />
              <Icon
                FilledIcon={HiBookmark}
                OutlinedIcon={HiOutlineBookmark}
                isActive={active === "saved"}
                onClick={() => setActive("saved")}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <ProfileImg size={"30px"} onClick={toggleDropdown} />
              <ProfileDropdown 
                isOpen={isDropdownOpen} 
                onClose={() => setIsDropdownOpen(false)} 
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
