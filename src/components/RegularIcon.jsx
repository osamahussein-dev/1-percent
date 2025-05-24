const RegularIcon = ({ IconName, link }) => {
  return (
    <a href={link ? link : null} target="_blank">
      <IconName className="ft-icon" />
    </a>
  );
};

export default RegularIcon;
