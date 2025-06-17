import { useState } from "react";
import ProfileImg from "./ProfileImg";

function CommentModal({ isOpen, onClose }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment("");
    onClose();
  };

  if (isOpen) return (
    <div className="w-full max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Comments</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          type="button"
        >
          ✕
        </button>
      </div>

      {/* Comments List */}
      <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
        <div className="flex gap-3">
          <ProfileImg size="32px" />
          <div className="flex-1 bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">John Doe</span>
              <span className="text-gray-500 text-xs">2h ago</span>
            </div>
            <p className="text-sm text-gray-700">
              This is a great explanation! Thanks for sharing.
            </p>
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <ProfileImg size="32px" />
        <div className="flex-1">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 resize-none"
            rows="2"
            required
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentModal; 