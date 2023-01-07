import React from "react";
import useStyles from './Styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { useDispatch } from "react-redux";
// import pic from './../../../assets/memories.jpg';
import moment from 'moment';
import {deletePost} from '../../../actions/posts';
const Post = ({ post,setCurrentId,currentId }) => {
    const dispatch=useDispatch();
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>

                {/* <CardMedia className={classes.media} image={post.selectedFile} title={post.title} /> */}
                <CardMedia className={classes.media} 
                image={post.selectedFile||
                    "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                }title={post.title}/>

                {/* {console.log(post.creator)} */}
                {/* <Typography variant="h1">Hello</Typography> */}

                <div className={classes.overlay}>
                    <Typography variant="h6" color="textPrimary" >{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>

                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => { setCurrentId(post._id)}} >
                        <MoreHorizIcon fontSize="medium" />
                    </Button>
                </div>

                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    {/* <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => { `#${tag}` })}</Typography> */}
                </div>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>

                <CardContent>
                    <Typography  variant="h5" gutterBottom>{post.message}</Typography>
                </CardContent>

                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize="small"/>
                        Like
                        {post.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id)) }}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>


            </Card>
        </>

    );
}
export default Post;
// import React from 'react';
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import moment from 'moment';
// import { useDispatch } from 'react-redux';

// // import { likePost, deletePost } from '../../../actions/posts';
// import useStyles from './Styles';

// const Post = ({ post, setCurrentId }) => {
//     const dispatch = useDispatch();
//     const classes = useStyles();

//     return (
//         <Card className={classes.card}>
//             <CardMedia className={classes.media} image={post.selectedFile || 
//                                 "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
//                 } title={post.title} />
//             <div className={classes.overlay}>
//                 <Typography variant="h6">{post.creator}</Typography>
//                 <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//             </div>
//             <div className={classes.overlay2}>
//                 <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="medium" /></Button>
//             </div>
//             <div className={classes.details}>
//                 <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
//             </div>
//             <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
//             <CardContent>
//                 <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
//             </CardContent>
//             <CardActions className={classes.cardActions}>
//                 <Button size="small" color="primary" onClick={() => 
//                     // dispatch(likePost(post._id))
//                 {}}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
//                 <Button size="small" color="primary" onClick={() =>{}
//                     //  dispatch(deletePost(post._id))
//                      }><DeleteIcon fontSize="small" /> Delete</Button>
//             </CardActions>
//         </Card>
//     );
// };

// export default Post;