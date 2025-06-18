import Content from "../components/Content";
import Follow from "../components/Follow";
import SideBar from "../components/Sidebar";
import SideList from "../components/SideList";
import Suggestions from "../components/Suggestions";
import AdviceCard from "../components/AdviceCard";
import "../css/home.css";

function Home() {
  return (
    <div className="main-home">
      <div className="container container-home flex-col lg:flex-row">
        <SideBar>
          <SideList />
          <AdviceCard />
        </SideBar>
        <Content />
        <SideBar>
          <Suggestions />
          <Follow />
        </SideBar>
      </div>
    </div>
  );
}

export default Home;
