import { useQuery } from "@tanstack/react-query";
import api from "../api";

function ExploreBtns({ selectedTopic, onTopicSelect }) {
  const { data: topics = [] } = useQuery({
    queryKey: ["topics"],
    queryFn: () => api.get("/topics")
  });

  return (
    <div className="flex justify-center lg:justify-start flex-wrap gap-2">
      <button
        onClick={() => onTopicSelect("")}
        className={`rounded-4xl border-1 border-gray-500 p-[4px_10px] ${
          !selectedTopic ? "text-white bg-black" : ""
        }`}
      >
        All Topics
      </button>
      {topics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onTopicSelect(topic.name)}
          className={`rounded-4xl border-1 border-gray-500 p-[4px_10px] ${
            selectedTopic === topic.name ? "text-white bg-black" : ""
          }`}
        >
          {topic.name}
        </button>
      ))}
    </div>
  );
}

export default ExploreBtns;
