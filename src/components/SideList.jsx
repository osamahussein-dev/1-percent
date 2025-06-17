import "../css/sidelist.css";
import { HiHome } from "react-icons/hi";
import ListItems from "./ListItems";
import { MdExplore, MdTopic } from "react-icons/md";

function SideList() {
  return (
    <div className="side-list">
      <div className="selector-list">
        <ul>
          <ListItems title="Home" Icon={HiHome} href="/home"/>
            
          <ListItems title="Explore" Icon={MdExplore} href="/explore"/>

          <ListItems title="Topics List" Icon={MdTopic} href="/topics"/>
            
        </ul>
      </div>
    </div>
  );
}

export default SideList;
