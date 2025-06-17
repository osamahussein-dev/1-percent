import { BiDotsVerticalRounded } from "react-icons/bi";
import PostTools from "./PostTools";
import ProfileImg from "./ProfileImg";
import { getTimeAgo } from "../utils/timeUtils";

function ExploreCard({ post }) {
  const createdAt = post?.created_at || new Date();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden max-w-[480px] w-full">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ProfileImg size={"40px"} id={post?.author_id} />
            <div>
              <h5 className="font-semibold text-gray-800">{post.author_name}</h5>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                  {post.topic_name}
                </span>
                <span>•</span>
                <span>{getTimeAgo(createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-4">
          {post.body}
        </p>
      </div>

      {/* Card Footer */}
      <div className="border-t border-gray-100">
        <PostTools postId={post.id} />
      </div>
    </div>
  );
}

export default ExploreCard;
