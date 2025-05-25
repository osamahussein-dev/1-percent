import { useParams, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import UserProfile from "../components/UserProfile";

function Profile() {
  const { username } = useParams();
  
  const users = {
    "osama.h": {
      name: "Osama Hussein",
      username: "@osama.h",
      bio: "Programmer | Web Developer",
      stats: {
        cards: 3,
        followers: 100,
        following: 100
      }
    },
    "mohammed.h": {
      name: "Mohammed Hussein",
      username: "@mohammed.h",
      bio: "Mathematics Teacher | Education Enthusiast",
      stats: {
        cards: 5,
        followers: 150,
        following: 80
      }
    },
    "anas.h": {
      name: "Anas Hussein",
      username: "@anas.h",
      bio: "Physics Expert | Science Communicator",
      stats: {
        cards: 7,
        followers: 200,
        following: 120
      }
    }
  };

  if (username === "osama.h") {
    return <Navigate to="/profile" replace />;
  }

  if (username && !users[username]) {
    return <NotFound />;
  }

  return <UserProfile username={username} users={users} />;
}

export default Profile; 