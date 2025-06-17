import { BiDotsVerticalRounded } from "react-icons/bi";
import ProfileImg from "./ProfileImg";
import "../css/post.css";
import PostTools from "./PostTools";
import { getTimeAgo } from "../utils/timeUtils";

function Post({ post }) {
  const createdAt = post?.created_at || new Date();

  return (
    <div className="post w-full">
      <div className="author-appearance">
        <div className="profile-wrapper">
          <ProfileImg size={"40px"} />

          <div className="user-info">
            <h5>{post?.author_name}</h5>
            <p>
              {post?.topic_name} - <span>{getTimeAgo(createdAt)}</span>
            </p>
          </div>
        </div>

        <BiDotsVerticalRounded />
      </div>

      <div className="post-content">
        <div className="heading-post">
          <h4>{post?.title}</h4>
        </div>

        <div className="content-msg">
          <p>
            {post?.body}
          </p>
        </div>
      </div>

      <PostTools />
    </div>
  );
}

export default Post;
