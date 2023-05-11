import axios from 'axios';//used to make api calls
// import { likePost } from './../../../../server/controllers/posts';

const url="http://localhost:5000";//url pointing to backend

const API = axios.create({baseURL:url});
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        console.log(JSON.parse(localStorage.getItem('profile')));
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).tokenId}`;
    }
    return req;
});
export const fetchposts=async()=>{
    const x=await API.get('/posts');
    console.log(x);
    return x;
}
export const createPosts=async(newPost)=>{
    console.log("api",newPost);
    const x=await API.post('/posts',newPost);
    console.log("completed",x);
    return x.data;
}
export const updatePosts=async(id,updatedPost)=>{
    return await API.patch(`/posts/${id}`,updatedPost);
}
export const deletePost=async(id)=>{
    return await API.delete(`/posts/${id}`);

}
export const likePost=async(id)=>{
    

    return await API.patch(`/posts/${id}/likePost`);

}

export const signIn =async(formData)=>{
    return await API.post('/users/signIn', formData);
}
export const signUp = async(formData) => {
    // console.log("hai43")
    const x = await API.post('/users/signUp', formData);
    console.log(x);
    return x;
}
