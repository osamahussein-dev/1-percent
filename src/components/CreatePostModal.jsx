import { useState } from "react";
import ProfileImg from "./ProfileImg";

function CreatePostModal({ isOpen, onClose }) {
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    topic: ""
  });

  const topics = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Literature",
    "History",
    "Art"
  ];

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  if (isOpen) return (
    <div className="w-full max-w-2xl mx-auto mt-4 bg-white rounded-lg shadow-sm p-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ProfileImg size="46px" />
            <h2 className="text-xl font-semibold">Create Post</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Topic Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Topic
          </label>
          <select
            name="topic"
            value={postData.topic}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200"
            required
          >
            <option value="">Select a topic</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
            placeholder="Enter your post title"
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            name="content"
            value={postData.content}
            onChange={handleChange}
            placeholder="Share your knowledge..."
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 min-h-[150px] resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostModal; 