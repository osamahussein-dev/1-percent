import "../css/followcard.css";
import ProfileImg from "./ProfileImg";

const FollowCard = ({ name, role }) => {
  return (
    <div className="follow-card">
      <div className="profile-section">
        <ProfileImg size={"40px"} />
        <div className="name-role">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>

      <div className="fl-btn">
        <button>Follow</button>
      </div>
    </div>
  );
};

export default FollowCard;
