import { Link, useNavigate } from "react-router-dom";

function ProfileDropdown({ isOpen, onClose, id }) {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const onLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  }

  return (
    <>
      <div 
        className="fixed inset-0 z-40"
        onClick={onClose}
      ></div>
      <div className="absolute top-[60px] right-5 bg-white rounded-lg shadow-lg w-60 z-50 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-base font-semibold text-gray-800">Osama Hussein</h3>
        </div>
        <div className="py-2">
          <Link 
            to={`/profile/${id}`} 
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <span className="material-icons text-gray-500 mr-3 text-xl">person</span>
            Profile
          </Link>
          <Link 
            to="/settings" 
            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <span className="material-icons text-gray-500 mr-3 text-xl">settings</span>
            Settings
          </Link>
          <button 
            onClick={onLogout} 
            className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-gray-50 cursor-pointer"
          >
            <span className="material-icons text-red-600 mr-3 text-xl">logout</span>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown; 