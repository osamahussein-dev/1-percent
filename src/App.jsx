import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/master.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Settings } from "./pages/Settings";

function App() {
  const location = useLocation();
  const hideNavOn = ["/", "/signin", "/signup"];
  const shouldShowNav = !hideNavOn.includes(location.pathname);

  return (
    <div className="all-web">
      {shouldShowNav && <NavBar />}
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" index element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {shouldShowNav && <Footer />}
    </div>
  );
}

export default App;
