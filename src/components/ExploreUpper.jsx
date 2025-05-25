import ExploreBtns from "./ExploreBtns";
import ExploreCard from "./ExploreCard";

function ExploreUpper() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 md:gap-0 py-[2%]">
        <div>
          <h2 className="font-[700]">Popular Topics</h2>
        </div>

        <a> View All </a>
      </div>

      <ExploreBtns />

      <div className="py-[30px] flex justify-center flex-wrap gap-10 2xl:justify-start">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </div>
  );
}

export default ExploreUpper;
