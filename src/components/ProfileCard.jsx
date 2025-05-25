function ProfileCard({ category, title, description, date, views, comments }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-sm text-gray-500">{category}</span>
          <h3 className="font-semibold mt-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="material-icons">bookmark_border</span>
        </button>
      </div>
      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
        <span>{date}</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="material-icons text-sm">visibility</span>
            {views}
          </div>
          <div className="flex items-center gap-1">
            <span className="material-icons text-sm">chat_bubble_outline</span>
            {comments}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard; 