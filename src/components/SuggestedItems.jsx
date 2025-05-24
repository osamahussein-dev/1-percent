function SuggestedItems() {
  let topics = [
    { name: "mathematics", count: "1.2k" },
    { name: "physics", count: "823" },
    { name: "chemistry", count: "123" },
  ];

  return (
    <ul className="suggested-items">
      {topics.map((topic) => (
        <li key={topic.name} className="flex items-center justify-between mb-3">
          <span className="text-[16px] font-medium text-gray-800">
            #{topic.name}
          </span>
          <span className="bg-gray-500 text-white text-sm px-2 py-1 rounded-full">
            {topic.count} cards
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SuggestedItems;
