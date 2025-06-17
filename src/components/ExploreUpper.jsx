import ExploreBtns from "./ExploreBtns";
import ExploreCard from "./ExploreCard";

function ExploreUpper({ selectedTopic, onTopicSelect, posts, isLoading }) {
  if (isLoading) {
    return (
      <div>
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-0 py-[2%]">
          <div>
            <h2 className="font-[700]">Popular Topics</h2>
          </div>
        </div>

        <ExploreBtns selectedTopic={selectedTopic} onTopicSelect={onTopicSelect} />

        <div className="py-[30px] flex justify-center flex-wrap gap-10 2xl:justify-start">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="animate-pulse">
              <div className="bg-gray-200 h-[200px] w-[480px] rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-0 py-[2%]">
        <div>
          <h2 className="font-[700]">
            {selectedTopic ? `Posts in ${selectedTopic}` : 'All Posts'}
          </h2>
        </div>
      </div>

      <ExploreBtns selectedTopic={selectedTopic} onTopicSelect={onTopicSelect} />

      <div className="py-[30px] flex justify-center flex-wrap gap-10 2xl:justify-start">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500">
            No posts found {selectedTopic ? `in ${selectedTopic}` : ''}
          </div>
        ) : (
          posts.map((post) => (
            <ExploreCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default ExploreUpper;
