import { useState } from "react";
import ProfileImg from "./ProfileImg";
import CreatePostModal from "./CreatePostModal";

function PostField() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center gap-4">
          <ProfileImg size={"46px"} />
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg text-left px-4 py-3.5 text-gray-500"
          >
            Share your knowledge...
          </button>
        </div>
      </div>

      <CreatePostModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default PostField;
