import { useState } from "react";
import { postdata } from "../api/Postapi";

export const Form = ({ data, setmhk }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPostData = async () => {
    try {
      const res = await postdata(addData);
      console.log("res", res);
      if (res.status === 201) {
        setmhk([...data, res.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.error("Failed to post data:", error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  return (
    <div>
      <form
        className="justify-center flex gap-4 my-4"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          placeholder="Title"
          className="text-lg p-3 font-medium bg-amber-300 border-2"
          value={addData.title}
          onChange={handleInputChange}
          name="title"
          required
        />
        <input
          type="text"
          placeholder="Details"
          className="text-lg p-3 font-medium bg-amber-300 border-2"
          value={addData.body}
          onChange={handleInputChange}
          name="body"
          required
        />
        <button
          className="text-lg bg-amber-500 font-bold text-cyan-300 px-4 py-2 rounded-2xl"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};
