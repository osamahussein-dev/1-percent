import FollowCard from "./FollowCard";
import "../css/followcard.css";

function Follow() {
  return (
    <div className="follow-section">
      <h3 className="text-md font-semibold text-gray-800 mb-4">
        Who to Follow
      </h3>
      <div className="flex flex-col gap-4">
        <FollowCard username="johndoe" />
        <FollowCard username="janedoe" />
      </div>
    </div>
  );
}

export default Follow;
