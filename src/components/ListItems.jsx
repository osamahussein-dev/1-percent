const ListItems = ({Icon, value, selected, title, href, children}) => {
  const cond = selected === value;

  return (
    <li>
      {Icon ? <Icon className="icon-style" /> : null}
      {href ? <a href={href}>{title}</a> : null}
      {children ? children : null}
    </li>
  );
};

export default ListItems;
