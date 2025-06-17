const ListItems = ({ children, Icon, setState, value, selected }) => {
  const isSelected = selected === value;

  return (
    <li
      className={`flex items-center gap-3 cursor-pointer transition-all duration-200 
        ${isSelected ? "bg-gray-200" : "hover:bg-gray-100"} 
        p-[10px_20px] rounded-lg w-full`}
      onClick={() => setState(value)}
    >
      {Icon && <Icon className={`text-xl ${isSelected ? "text-gray-700" : "text-gray-500"}`} />}
      <span className={`${isSelected ? "text-gray-700" : "text-gray-600"}`}>
        {children}
      </span>
    </li>
  );
};

export default ListItems;
