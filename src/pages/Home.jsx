import SideBar from "../components/SideBar";

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
