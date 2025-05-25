import "../css/sidebar.css";

const SideBar = ({ children }) => {
  return <aside className="w-[100%] lg:w-[25%]">{children}</aside>;
};

export default SideBar;
