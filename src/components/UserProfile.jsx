import ProfileHeader from "./ProfileHeader";
import Post from "./Post";
import { jsonParse } from "../helpers";

function UserProfile({ user, posts }) {
  const loggedInUser = jsonParse(localStorage.getItem("user"));
  const isOwnProfile = loggedInUser?.id === user?.id;

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader userData={user} isOwnProfile={isOwnProfile} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile; 