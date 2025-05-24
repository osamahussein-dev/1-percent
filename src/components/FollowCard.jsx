import "../css/followcard.css";

function FollowCard({ username }) {
  return (
    <div className="follow-card bg-white p-3 rounded-lg shadow flex items-center justify-between">
      <div className="text-gray-800 font-medium">@{username}</div>
      <button className="bg-black text-white px-3 py-1 rounded-full text-sm">
        Follow
      </button>
    </div>
  );
}

export default FollowCard;
