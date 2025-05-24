import ExploreUpper from "../components/ExploreUpper";
import ExploreBtns from "../components/ExploreBtns";
import ExploreCard from "../components/ExploreCard";

function Explore() {
  return (
    <div className="explore-page">
      <ExploreUpper />
      <ExploreBtns />
      <div className="explore-list">
        <ExploreCard title="Card 1" description="Hi this is a test card" />
        <ExploreCard title="Card 2" description="Hi this is a test card" />
      </div>
    </div>
  );
}

export default Explore;
