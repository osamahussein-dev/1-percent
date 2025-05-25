import "../css/suggestions.css";
import ListItems from "./ListItems";
import SideCards from "./SideCards";
import SuggestedItems from "./SuggestedItems";

function Suggestions() {
  return (
    <SideCards headingTitle={"Suggested Topics"}>
      <ListItems>
        <SuggestedItems name={"mathematics"} cardsNumbers={"1.2k"} />
      </ListItems>
      <ListItems>
        <SuggestedItems name={"physics"} cardsNumbers={"823"} />
      </ListItems>

      <ListItems>
        <SuggestedItems name={"chemistry"} cardsNumbers={"123"} />
      </ListItems>
    </SideCards>
  );
}

export default Suggestions;
