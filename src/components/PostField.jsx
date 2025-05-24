import "../css/postbar.css";

function PostField() {
  return (
    <div className="share-bar">
      <div className="wrapper">
        <div className="input-share">
          <input type="text" placeholder="What's on your mind?" />
        </div>
      </div>
    </div>
  );
}

export default PostField;
