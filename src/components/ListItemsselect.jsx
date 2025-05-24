const ListItems = ({ children, Icon, setState, value, selected }) => {
  const cond = selected === value;

  return (
    <li
      className={`flex gap-2 ${
        cond ? "bg-gray-300 text-white shadow" : ""
      } p-[10px_30px_10px_20px] rounded-2xl`}
      onClick={() => setState(value)}
    >
      {Icon ? <Icon className="icon-style" /> : null}
      {children}
    </li>
  );
};

export default ListItems;
