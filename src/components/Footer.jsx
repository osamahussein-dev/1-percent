import { Link } from "react-router-dom";
import "../css/footer.css";

const footerLinks = [
  { name: "Explore", path: "/explore" },
  { name: "Topics", path: "/topics" },
  { name: "Settings", path: "/settings" }
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo & Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-white text-lg font-semibold">1 Percent</h3>
            <p className="text-gray-400 text-sm mt-2">One percent better every day.</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} 1 Percent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
