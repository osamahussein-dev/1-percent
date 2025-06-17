import { Link } from "react-router-dom";

const ListItems = ({Icon, value, selected, title, href, children}) => {
  const cond = selected === value;

  return (
    <li>
      {Icon ? <Icon className="icon-style" /> : null}
      {href ? <Link to={href}>{title}</Link> : null}
      {children ? children : null}
    </li>
  );
};

export default ListItems;
