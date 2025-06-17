import { useState } from "react";
import { BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import "../css/ptools.css";
import TLIcon from "./TLIcon";
import CommentModal from "./CommentModal";

function PostTools() {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="tools-holder">
        <div onClick={handleLikeClick}>
          <TLIcon Icon={isLiked ? BiSolidLike : BiLike} />
        </div>
        <div onClick={() => setIsCommentModalOpen(true)}>
          <TLIcon Icon={BiComment} />
        </div>
      </div>

      <CommentModal 
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
      />
    </>
  );
}

export default PostTools;
