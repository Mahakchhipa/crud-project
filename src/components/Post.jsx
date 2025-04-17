import { deletepost, getpost } from "../api/Postapi";
import { useEffect, useState } from "react";
import {Form} from "../components/Form"
export const Post = () => {
  const [data, setData] = useState([]);
  const getpostdata = async () => {
    const res = await getpost();
    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getpostdata();
  }, []);

  const handledeletepost = async (id) => {
    try {
      const res = await deletepost(id);
      if (res.status === 200) {
        const newupdatepost = data.filter((curpost) => {
          return curpost.id !== id;
        });
        setData(newupdatepost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div> 
    <Form data={data} setmhk={setData}/>
    </div>
    <section className=" section-post">
      <ul className="grid grid-cols-2 gap-4">
        {data.map((curelm) => {
          const { id, body, title } = curelm;
          return (
            <li key={id} className="bg-amber-200 p-4 text-lg">
              <p> {title}</p>
              <p> {body}</p>
              <div className="flex gap-8 my-3 font-medium"> 
              <button className="text-lg bg-yellow-300 rounded-2xl px-4 py-2 font-normal "> Edit</button> <br />
              <button className="text-lg bg-yellow-300 px-4 rounded-2xl py-2 font-normal" onClick={() => handledeletepost(id)}> Delete </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
    </>
  );
};

export default Post;
