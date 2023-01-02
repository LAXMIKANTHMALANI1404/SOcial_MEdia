import React, { useReducer } from "react";
import Post from './Post/Post';
import useStyles from './Styles';
import {useSelector} from 'react-redux';
// import reducers from "../../reducers/posts.js";
import { Grid, CircularProgress } from '@material-ui/core'
const Posts = ({setCurrentId})=>{
    const classes = useStyles();
    // const init = { posts: [{ creator: "h", title: "h", message: "h", tags: "h", selectedFile: "h" }]};
    // const [state,dispatch]=useReducer(reducers,init);
   
    const posts=useSelector((state)=>state);

    console.log("posts");
    console.log((posts));
    // posts.map(item=>{console.log(item)});
    console.log(typeof (posts));
    // console.log(posts.posts);
    var x = posts.posts;
    // var x=[{_id:"23",creator:"lkm"}];
    console.log(x);
    return (
        <>
            {!x.length ? <CircularProgress /> :
                (
                    <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                       
                        {x.map(post=>{
                            return <Post setCurrentId={setCurrentId} key={post._id} post={post}/> 
                        })}
                    </Grid>
                )}
        </>
    );
}
export default Posts;