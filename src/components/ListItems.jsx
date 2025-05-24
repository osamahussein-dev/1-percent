const ListItems = ({ children, Icon, setState, value, selected }) => {
  const cond = selected === value;

  return (
    <li>
      {Icon ? <Icon className="icon-style" /> : null}
      {children}
    </li>
  );
};

export default ListItems;
