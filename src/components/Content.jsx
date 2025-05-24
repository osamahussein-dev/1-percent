import PostField from "./PostField";
import Post from "./Post";
import "../css/content.css";

function Content() {
  return (
    <main className="flex flex-col items-center gap-[40px]">
      <PostField />
      <Post />
      <Post />
    </main>
  );
}

export default Content;
