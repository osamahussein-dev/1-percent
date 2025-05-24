import SuggestedItems from "./SuggestedItems";
import "../css/suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions bg-white p-4 rounded-lg shadow">
      <h3 className="text-md font-semibold text-gray-800 mb-4">
        Suggested Topics
      </h3>
      <SuggestedItems />
    </div>
  );
}

export default Suggestions;
