import { useState } from "react";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import "../css/ptools.css";
import TLIcon from "./TLIcon";
import CommentModal from "./CommentModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";
import queryClient from "../queryClient";
import { jsonParse } from "../helpers";

function PostTools({ postId }) {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const loggedInUser = jsonParse(localStorage.getItem("user"));

  const { data: likesInfo = { likes: 0, hasLiked: false } } = useQuery({
    queryKey: ["likes", postId],
    queryFn: () => api.get(`/posts/${postId}/likes`),
    enabled: !!postId
  });

  //like/unlike
  const { mutateAsync: toggleLike, isPending } = useMutation({
    mutationFn: async () => {
      if (likesInfo.hasLiked) {
        return api.delete(`/posts/${postId}/likes`, { 
          data: { user_id: loggedInUser.id } 
        });
      } else {
        return api.post(`/posts/${postId}/likes`, { 
          user_id: loggedInUser.id 
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes", postId] });
    }
  });

  const handleLikeClick = async () => {
    if (!loggedInUser || isPending) return;
    try {
      await toggleLike();
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <>
      <div className="tools-holder">
        <div 
          onClick={handleLikeClick} 
          className={`flex items-center gap-1 cursor-pointer ${isPending ? 'opacity-50' : ''}`}
        >
          <TLIcon Icon={likesInfo.hasLiked ? BiSolidLike : BiLike} />
          <span className="text-sm text-gray-600">{likesInfo.likes}</span>
        </div>
        <div 
          onClick={() => setIsCommentModalOpen(!isCommentModalOpen)} 
          className="flex items-center gap-1 cursor-pointer"
        >
          <TLIcon Icon={BiComment} />
        </div>
      </div>

      <CommentModal 
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        postId={postId}
      />
    </>
  );
}

export default PostTools;
