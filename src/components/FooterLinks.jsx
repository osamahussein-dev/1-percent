const FooterLinks = ({ Items, headingtitle, children }) => {
  return (
    <div className="footerlist w-[100%] md:w-[20%]">
      <div className="heading-list">
        <h2>{headingtitle}</h2>
      </div>

      <div className="list-ft">
        <ul>
          {Items ? Items.map((el, index) => <li key={index}>{el}</li>) : null}
        </ul>

        <div className="addition-part">{children}</div>
      </div>
    </div>
  );
};

export default FooterLinks;
