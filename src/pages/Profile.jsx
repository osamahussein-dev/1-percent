import ProfileHeader from "../components/ProfileHeader";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  const cards = [
    {
      category: "Mathematics",
      title: "Quadratic Equations Simplified",
      description: "ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate voluptates tenetur at amet facilis debitis accusamus et asperiores sapiente, praesentium, magnam quo cum ad corrupti! Fugiat sed quasi impedit.",
      date: "Apr 15, 2023",
      views: 24,
      comments: 8
    },
    {
      category: "Algebra",
      title: "Linear Functions Made Easy",
      description: "ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate voluptates tenetur at amet facilis debitis accusamus et asperiores sapiente, praesentium, magnam quo cum ad corrupti! Fugiat sed quasi impedit.",
      date: "Apr 12, 2023",
      views: 18,
      comments: 5
    },
    {
      category: "Geometry",
      title: "Circle Theorems Explained",
      description: "ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate voluptates tenetur at amet facilis debitis accusamus et asperiores sapiente, praesentium, magnam quo cum ad corrupti! Fugiat sed quasi impedit.",
      date: "Apr 10, 2023",
      views: 32,
      comments: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <ProfileCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile; 