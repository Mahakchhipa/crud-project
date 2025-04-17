import axios from "axios";

const api = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
})

export const getpost =( )=>{
   return api.get("/posts")
}
export const deletepost = (id)=>{
  return api.delete(`\posts/${id}`)
}