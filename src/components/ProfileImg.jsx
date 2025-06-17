import "../css/profimg.css";

function ProfileImg({ size = "32px" }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden"
    >
      <img
        src="https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI="
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default ProfileImg;
