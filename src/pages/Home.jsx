import Content from "../components/Content";
import SideBar from "../components/SideBar";
import SideList from "../components/SideList";
import Suggestions from "../components/Suggestions";
import Follow from "../components/Follow";
import "../css/home.css";

const Home = () => {
  return (
    <div className="main-home">
      <div className="container container-home flex flex-col lg:flex-row gap-6">
        <SideBar>
          <SideList />
        </SideBar>
        <Content />
        <div className="w-full lg:w-[250px]">
          <Suggestions />
          <Follow />
        </div>
      </div>
    </div>
  );
};

export default Home;
