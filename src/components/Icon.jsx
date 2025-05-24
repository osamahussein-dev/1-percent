const Icon = ({ FilledIcon, OutlinedIcon, isActive, onClick }) => {
  return (
    <div className="icon" onClick={onClick}>
      {isActive ? (
        <FilledIcon className="header-icon" />
      ) : (
        <OutlinedIcon className="header-icon" />
      )}
    </div>
  );
};

export default Icon;
