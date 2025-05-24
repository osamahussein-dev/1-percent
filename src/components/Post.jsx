import { BiDotsVerticalRounded } from "react-icons/bi";
import ProfileImg from "./ProfileImg";
import "../css/post.css";
import PostTools from "./PostTools";
function Post() {
  return (
    <div className="post max-w-full">
      <div className="author-appearance">
        <div className="profile-wrapper">
          <ProfileImg size={"40px"} />

          <div className="user-info">
            <h5>Osama Hussein</h5>
            <p>
              Mathematics - <span>2h ago</span>
            </p>
          </div>
        </div>

        <BiDotsVerticalRounded />
      </div>

      <div className="post-content">
        <div className="heading-post">
          <h4>Quadratic Fourmula Explained</h4>
        </div>

        <div className="content-msg">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            omnis facere molestias quisquam fugit corporis excepturi natus
            assumenda sint! Perspiciatis at odit necessitatibus fugiat quos,
            nihil praesentium ipsa temporibus cupiditate accusamus facere
            dolore, delectus molestiae iste optio magnam eveniet illo voluptas
          </p>
        </div>
      </div>

      <PostTools />
    </div>
  );
}

export default Post;
