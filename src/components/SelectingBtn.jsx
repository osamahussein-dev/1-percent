const SelectingBtn = ({ title }) => {
  return title.map((el, index) => (
    <button
      key={index}
      className={`rounded-4xl border-1 border-gray-500 p-[4px_10px] ${
        index == 0 ? "text-white bg-black" : null
      }`}
    >
      {el}
    </button>
  ));
};

export default SelectingBtn;
