import * as api from '../api/index.js';
// import { updatePost } from './../../../../server/controllers/posts';

export const getposts=()=>async(dispatch)=>{
    try{
        const data=await api.fetchposts();
        console.log(data);
        const action = { type: 'FETCH_ALL', payload: data.data};
        dispatch(action);
    }
    catch(error){
        console.log(error);
    }
}
export const createPosts=(post)=>async(dispatch)=>{
    try{
        console.log(post);
            const data=await api.createPosts(post);
            console.log(data);
            dispatch({type:'CREATE',payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const updatePost=(currentId,post)=>async(dispatch)=>{
    try{
        const data  =await api.updatePosts(currentId,post);
        dispatch({type:'UPDATE',payload:data});
    }   
    catch(error){
        console.log(error);
    }
}
export const deletePost=(id)=>async(dispatch)=>{
    try{
        console.log("hai");

        const data=await api.deletePost(id);
        // console.log("hai");

        dispatch({type:'DELETE',payload:id});
    }
    catch(error){
        console.log(error);
    }
}