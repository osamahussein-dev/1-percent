import { BiDotsVerticalRounded } from "react-icons/bi";
import ProfileImg from "./ProfileImg";
import "../css/post.css";
import PostTools from "./PostTools";
import { getTimeAgo } from "../utils/timeUtils";
import { jsonParse } from "../helpers";
import { MdDeleteOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import api from "../api";
import queryClient from "../queryClient";

function Post({ post }) {
  const loggedInUser = jsonParse(localStorage.getItem("user"));
  const isAdmin = loggedInUser?.role === "admin";
  const isOwnPost = loggedInUser?.id === post?.author_id;
  const createdAt = post?.created_at || new Date();
  const { mutateAsync: deletePost } = useMutation({
    mutationFn: (id) => api.delete(`/posts/${id}`),
  });

  const handleDelete = async (id) => {
    await deletePost(id);
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  };

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

         {(isAdmin || isOwnPost) && <MdDeleteOutline onClick={() => handleDelete(post?.id)} />}
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
