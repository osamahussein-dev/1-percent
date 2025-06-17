import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api";

function Topics() {
  const { data: topics = [], isLoading, isError, error } = useQuery({
    queryKey: ["topics"],
    queryFn: () => api.get("/topics")
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/4 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-16 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-red-600">
          <p>Error loading topics: {error.message}</p>
        </div>
      </div>
    );
  }

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
              key={topic.id}
              to={`/explore?topic=${encodeURIComponent(topic.name)}`}
              className="p-4 hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-between group"
            >
              <span className="text-gray-800 text-lg">{topic.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topics; 