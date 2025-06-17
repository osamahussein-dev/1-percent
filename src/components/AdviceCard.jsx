import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AdviceCard = () => {
  const { data: response, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => axios.get("https://api.adviceslip.com/advice"),
  });

  const advice = response?.data?.slip?.advice;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Daily Advice</h3>
      </div>
      
      <div className="text-gray-600 leading-relaxed">
        {isLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <p>{advice}</p>
        )}
      </div>
    </div>
  );
};

export default AdviceCard; 