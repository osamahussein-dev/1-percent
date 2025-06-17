import { useParams, Navigate } from "react-router-dom";
import NotFound from "./NotFound";
import UserProfile from "../components/UserProfile";
import { useQuery } from "@tanstack/react-query";
import api from "../api";


function Profile() {
  const { id } = useParams();

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get(`/users/${id}`),
  });

  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api.get(`/posts?author_id=${id}`),
  });

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <NotFound />;
  }

  return <UserProfile user={user} posts={posts} />;
}

export default Profile; 