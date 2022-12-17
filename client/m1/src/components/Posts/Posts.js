import React from "react";
import Post from './Post/Post';
import useStyles from './Styles';
import {useSelector} from 'react-redux';
const Posts = ()=>{
    const classes = useStyles();
    const posts=useSelector((state)=>{return state.posts});
    console.log(posts);
    return (
        <>
            <Post/>
        </>
    );
}
export default Posts;