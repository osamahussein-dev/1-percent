import PostTools from "./PostTools";
import "../css/post.css";

function Post() {
  return (
    <div className="post">
      <div className="author-appearance">
        <div className="profile-wrapper">
          <div className="user-info">
            <strong>Username</strong>
            <p>@username</p>
          </div>
        </div>
      </div>
      <div className="post-content">
        <h4 className="heading-post">Post Title</h4>
        <p className="content-msg">
          This is a post content section styled from your original CSS.
        </p>
      </div>
      <PostTools />
    </div>
  );
}

export default Post;
