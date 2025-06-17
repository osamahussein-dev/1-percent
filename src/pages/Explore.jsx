import { useSearchParams } from "react-router-dom";
import ExploreUpper from "../components/ExploreUpper";
import { useQuery } from "@tanstack/react-query";
import api from "../api";

function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: topics = [] } = useQuery({
    queryKey: ["topics"],
    queryFn: () => api.get("/topics"),
  });

  const selectedTopic = searchParams.get("topic");
  const topicId = topics.find(topic => topic.name === selectedTopic)?.id || topics[0]?.id;

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts", topicId],
    queryFn: async () => api.get(`/posts?topic_id=${topicId}`),
    enabled: !!topicId,
  });

  return (
    <div className="explore">
      <div className="container container-explore">
        <ExploreUpper 
          selectedTopic={selectedTopic}
          onTopicSelect={(topic) => setSearchParams({ topic })}
          posts={posts}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Explore;
