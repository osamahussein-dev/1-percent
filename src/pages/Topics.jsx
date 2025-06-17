import { Link } from "react-router-dom";

function Topics() {
  const topics = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Literature",
    "History",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Topics</h1>
        <p className="text-gray-600 mt-2">Select a topic to explore</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <Link
              key={topic}
              to={`/explore?topic=${encodeURIComponent(topic)}`}
              className="p-4 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between group"
            >
              <span className="text-gray-800 text-lg">{topic}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topics; 