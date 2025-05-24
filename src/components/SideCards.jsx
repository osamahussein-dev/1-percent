import "../css/sidecard.css";

const SideCards = ({ headingTitle, children }) => {
  return (
    <div className="card-container-sd">
      <div className="card-list">
        <div className="heading-card">
          <h2>{headingTitle}</h2>
        </div>

        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default SideCards;
