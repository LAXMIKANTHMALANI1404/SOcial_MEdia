import axios from 'axios';//used to make api calls

const url="http://localhost:5000/posts";//url pointing to backend

export const fetchposts=async()=>{
    const x=await axios.get(url);
    console.log(x);
    return x;
}
export const createPosts=async(newPost)=>{
    console.log("api",newPost);
    const x=await axios.post(url,newPost);
    console.log("completed",x);
    return x.data;
}
export const updatePosts=(id,updatedPost)=>{
    axios.patch(`${url}/${id}`,updatedPost);
}
export const deletePost=async(id)=>{
    await axios.delete(`${url}/${id}`);
    console.log("hi");

}
