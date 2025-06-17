import PostField from "./PostField";
import Post from "./Post";
import "../css/content.css";
import { useQuery } from "@tanstack/react-query";
import api from "../api";

function Content() {
  const { data: posts = [], isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api.get("/posts"),
  });

  // const [posts, setPosts] = useState([]);
  // const [status, setStatus] = useState("loading");
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   setStatus("loading");
  //   api.get("/posts").then((res) => {
  //     setPosts(res.data);
  //     setStatus("success");
  //   }).catch((err) => {
  //     setError(err);
  //     setStatus("error");
  //   });
  // }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="w-[100%] lg:w-1/2">
      <PostField />
      {
        posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </main>
  );
}

export default Content;
