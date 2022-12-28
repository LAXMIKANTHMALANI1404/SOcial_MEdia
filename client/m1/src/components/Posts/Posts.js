import React, { useReducer } from "react";
import Post from './Post/Post';
import useStyles from './Styles';
import {useSelector} from 'react-redux';
import reducers from "../../reducers/posts.js";
const Posts = ()=>{
    const classes = useStyles();
    // const init = { posts: [{ creator: "h", title: "h", message: "h", tags: "h", selectedFile: "h" }]};
    // const [state,dispatch]=useReducer(reducers,init);
   
    const posts=useSelector((state)=>state);
    console.log("posts");
    console.log(posts);
    
    return (
        <>
            <Post/>
        </>
    );
}
export default Posts;