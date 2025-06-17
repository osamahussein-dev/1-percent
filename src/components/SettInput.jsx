const SettInput = ({ title, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-gray-700 font-medium">{title}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-white border border-gray-300 p-2.5 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-gray-200 
          transition-all duration-200"
      />
    </div>
  );
};

export default SettInput;
