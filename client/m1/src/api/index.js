import axios from 'axios';//used to make api calls

const url="http://localhost:5000/posts";//url pointing to backend

export const fetchposts=async()=>{
    const x=await axios.get(url);
    console.log(x);
    return x;
}
export const createPosts=async(newPost)=>{
    console.log("api",newPost);
    await axios.post(url,newPost);
    console.log("completed");
}
