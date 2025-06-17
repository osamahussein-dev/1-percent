import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiHome, HiOutlineHome, HiSearch, HiOutlineSearch } from "react-icons/hi";
import { MdTopic, MdOutlineTopic } from "react-icons/md";
import Icon from "./Icon";
import ProfileImg from "./ProfileImg";
import ProfileDropdown from "./ProfileDropdown";

function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.slice(1);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home">
              <img src="/1percent.png" alt="1percent logo" className="h-8 w-auto sm:h-10" />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Home Link */}
            <Link
              to="/home"
              className={`p-2 rounded-lg ${
                currentPath === "home" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon
                FilledIcon={HiHome}
                OutlinedIcon={HiOutlineHome}
                isActive={currentPath === "home"}
              />
            </Link>

            {/* Explore Link */}
            <Link
              to="/explore"
              className={`p-2 rounded-lg ${
                currentPath === "explore" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon
                FilledIcon={HiSearch}
                OutlinedIcon={HiOutlineSearch}
                isActive={currentPath === "explore"}
              />
            </Link>

            {/* Topics Link */}
            <Link
              to="/topics"
              className={`p-2 rounded-lg ${
                currentPath === "topics" 
                  ? "text-gray-900 bg-gray-100" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon
                FilledIcon={MdTopic}
                OutlinedIcon={MdOutlineTopic}
                isActive={currentPath === "topics"}
              />
            </Link>

            {/* Profile Button */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <ProfileImg size={"32px"} />
              </button>
              
              {isDropdownOpen && (
                <ProfileDropdown
                  isOpen={isDropdownOpen}
                  onClose={() => setIsDropdownOpen(false)}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
