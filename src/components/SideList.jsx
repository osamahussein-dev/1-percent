import "../css/sidelist.css";
import { HiHome } from "react-icons/hi";
import ListItems from "./ListItems";
import { MdExplore, MdTopic } from "react-icons/md";

function SideList() {
  return (
    <div className="side-list">
      <div className="selector-list">
        <ul>
          <ListItems Icon={HiHome}>
            <p>Home</p>
          </ListItems>
          <ListItems Icon={MdExplore}>
            <a href="/explore">
              <p>Explore</p>
            </a>
          </ListItems>
          <ListItems Icon={MdTopic}>
            <p>Topics List</p>
          </ListItems>
        </ul>
      </div>
    </div>
  );
}

export default SideList;
