import SelectingBtn from "./SelectingBtn";

function ExploreBtns() {
  return (
    <div className="flex justify-center lg:justify-start flex-wrap gap-2">
      <SelectingBtn
        title={[
          "Programming",
          "Mathematics",
          "Science",
          "Languages",
          "History",
        ]}
      />
    </div>
  );
}

export default ExploreBtns;
