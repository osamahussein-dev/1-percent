import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="max-w-lg text-center">
        <h1 className="text-[120px] font-bold text-gray-800 leading-none m-0">
          404
        </h1>
        <h2 className="text-3xl text-gray-700 my-3">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist
        </p>
        <Link 
          to="/home" 
          className="inline-block px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound; 