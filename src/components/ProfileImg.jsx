import "../css/profimg.css";
import { useQuery } from "@tanstack/react-query";

function ProfileImg({ size = "32px", id }) {
  const {data: randomImage, isLoading} = useQuery({
    queryKey: ["randomImage", id],
    queryFn: () => fetch("https://randomfox.ca/floof").then(res => res.json()),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const imageUrl = randomImage?.image;

  if (isLoading) return <div className="loader" />;

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden"
    >
      <img
        alt="Profile"
        className="w-full h-full object-cover"
        src={imageUrl}
        crossOrigin="anonymous"
      />
    </div>
  );
}

export default ProfileImg;
