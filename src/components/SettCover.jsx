const SettCover = ({ children, headingTitle }) => {
  return (
    <div className="bg-white shadow-md rounded-xl w-full lg:w-[80%] overflow-hidden">
      <div className="border-b border-gray-100 p-6">
        <h1 className="font-semibold text-2xl text-gray-800">{headingTitle}</h1>
      </div>

      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default SettCover;
