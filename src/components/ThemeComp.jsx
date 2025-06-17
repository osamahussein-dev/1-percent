const ThemeComp = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Light Theme */}
      <div className="flex-1 border border-gray-200 p-5 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="lightChoice" className="font-medium text-gray-700 cursor-pointer">Light Theme</label>
          <input type="radio" name="theme" id="lightChoice" className="cursor-pointer" />
        </div>
        <div className="rounded-lg h-[120px] bg-gray-100"></div>
      </div>

      {/* Dark Theme */}
      <div className="flex-1 border border-gray-200 p-5 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="darkChoice" className="font-medium text-gray-700 cursor-pointer">Dark Theme</label>
          <input type="radio" name="theme" id="darkChoice" className="cursor-pointer" />
        </div>
        <div className="rounded-lg h-[120px] bg-gray-900"></div>
      </div>

      {/* System Theme */}
      <div className="flex-1 border border-gray-200 p-5 rounded-xl hover:shadow-md transition-all duration-200 cursor-pointer">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="systemChoice" className="font-medium text-gray-700 cursor-pointer">System Theme</label>
          <input type="radio" name="theme" id="systemChoice" className="cursor-pointer" />
        </div>
        <div className="rounded-lg h-[120px] bg-gradient-to-r from-gray-100 to-gray-900"></div>
      </div>
    </div>
  );
};

export default ThemeComp;
