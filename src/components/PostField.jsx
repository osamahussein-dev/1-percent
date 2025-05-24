import ProfileImg from "./ProfileImg";
import "../css/postbar.css";
function PostField() {
  return (
    <div className="share-bar w-full">
      <div className="wrapper">
        <ProfileImg size={"46px"} />

        <div className="input-share">
          <input type="text" placeholder="Share your knowledge..." />
        </div>
      </div>
    </div>
  );
}

export default PostField;
