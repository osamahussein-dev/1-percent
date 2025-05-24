import { BiBook, BiBookmark, BiComment, BiLike } from "react-icons/bi";
import "../css/ptools.css";
import TLIcon from "./TLIcon";

function PostTools() {
  return (
    <div className="tools-holder">
      <TLIcon Icon={BiLike} />
      <TLIcon Icon={BiComment} />
      <TLIcon Icon={BiBookmark} />
    </div>
  );
}

export default PostTools;
