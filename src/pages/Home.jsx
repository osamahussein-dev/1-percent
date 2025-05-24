import Content from "../components/Content";
import Follow from "../components/Follow";
import SideBar from "../components/SideBar";
import SideList from "../components/SideList";
import Suggestions from "../components/Suggestions";
import "../css/home.css";
function Home() {
  return (
    <div className="main-home">
      <div className="container container-home flex-col lg:flex-row">
        <SideBar>
          <SideList />
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
