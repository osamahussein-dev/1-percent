import { useState } from "react";
import ProfileImg from "./ProfileImg";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../api";
import queryClient from "../queryClient";
import { jsonParse } from "../helpers";
import { getTimeAgo } from "../utils/timeUtils";
import { MdDeleteOutline } from "react-icons/md";

function CommentModal({ isOpen, onClose, postId }) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const loggedInUser = jsonParse(localStorage.getItem("user"));
  const isAdmin = loggedInUser?.role === "admin";

  const { data: comments = [] } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => api.get(`/posts/${postId}/comments`),
    enabled: isOpen && !!postId
  });

  const { mutateAsync: addComment, isPending: isAdding } = useMutation({
    mutationFn: (commentData) => api.post(`/posts/${postId}/comments`, commentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      setComment("");
      setError("");
    },
    onError: (err) => {
      setError(err.response?.data?.message);
    }
  });

  const { mutateAsync: deleteComment, isPending: isDeleting } = useMutation({
    mutationFn: (commentId) => api.delete(`/comments/${commentId}`, {
      data: { author_id: loggedInUser.id }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      setError("");
    },
    onError: (err) => {
      setError(err.response?.data?.message);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim() || isAdding) return;

    try {
      await addComment({
        author_id: loggedInUser.id,
        body: comment.trim()
      });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDelete = async (commentId) => {
    if (isDeleting) return;
    
    try {
      await deleteComment(commentId);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-full bg-white border-t border-gray-200 mt-4 p-4">
      <div className="max-w-2xl mx-auto">
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

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
          {comments.length === 0 ? (
            <p className="text-center text-gray-500">No comments yet</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <ProfileImg size="32px" i d={comment.author_id} />
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{comment.author_name}</span>
                      <span className="text-gray-500 text-xs">{getTimeAgo(comment.created_at)}</span>
                    </div>
                    {(isAdmin || loggedInUser?.id === comment.author_id) && (
                      <button 
                        onClick={() => handleDelete(comment.id)}
                        className="text-gray-500 hover:text-red-500 disabled:opacity-50"
                        disabled={isDeleting}
                      >
                        <MdDeleteOutline size={18} />
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-700">{comment.body}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <ProfileImg size="32px" id={loggedInUser.id} />
          <div className="flex-1">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 resize-none"
              rows="2"
              required
              disabled={isAdding}
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                disabled={!comment.trim() || isAdding}
              >
                {isAdding ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentModal; 