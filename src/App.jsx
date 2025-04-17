import { Post } from "./components/Post";

const App = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-pink-800 justify-center py-5 text-4xl bg-pink-200 font-bold ">
          {" "}
          My Api Project{" "}
        </h1>
      </div>
      <Post />
    </div>
  );
};

export default App;
