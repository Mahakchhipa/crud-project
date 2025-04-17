import { Post } from "./components/Post";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="text-center justify-center py-5 text-4xl bg-pink-300 font-bold ">
          {" "}
          My Api Project{" "}
        </h1>
      </div>
      <Post />
    </div>
  );
};

export default App;
