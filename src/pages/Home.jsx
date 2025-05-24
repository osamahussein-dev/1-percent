import Content from "../components/Content";
import SideBar from "../components/SideBar";
import "../css/home.css";

const Home = () => {
  return (
    <div className="main-home">
      <div className="container container-home flex-col lg:flex-row">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
