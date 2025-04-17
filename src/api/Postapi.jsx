import axios from "axios";

const api = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com"
})
// get methed api 
export const getpost =( )=>{
   return api.get("/posts")
}

// delete methed api 
export const deletepost = (id)=>{
  return api.delete(`\posts/${id}`)
}

// post methed api 
export const postdata = (data)=>{
  return api.post("\posts",data)
}