import PostField from "./PostField";
import Post from "./Post";
import "../css/content.css";

function Content() {
  return (
    <main className="w-[100%] lg:w-1/2">
      <PostField />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default Content;
