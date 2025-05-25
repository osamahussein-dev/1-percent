const SuggestedItems = ({ name, cardsNumbers }) => {
  return (
    <div className="sep-text">
      <p>#{name}</p> <span>{cardsNumbers} cards</span>
    </div>
  );
};

export default SuggestedItems;
