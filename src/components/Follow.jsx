import "../css/sidecard.css";
import FollowCard from "./FollowCard";
import ListItems from "./ListItems";
import SideCards from "./SideCards";

function Follow() {
  return (
    <SideCards headingTitle={"Who to Follow"}>
      <ListItems>
        <FollowCard name={"Osama Hussein"} role={"Programmer"} />
      </ListItems>

      <ListItems>
        <FollowCard name={"Osama Hussein"} role={"Programmer"} />
      </ListItems>
    </SideCards>
  );
}

export default Follow;
