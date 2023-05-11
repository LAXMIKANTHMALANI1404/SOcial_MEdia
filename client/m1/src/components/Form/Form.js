import React, { useState,useEffect } from 'react';
import useStyles from './Styles';
import { Typography, TextField, Paper, StepConnector,Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import {createPosts,updatePost} from '../../actions/posts'
// import { updatePost } from './../../../../../server/controllers/posts';
const Form = ({currentId,setCurrentId}) => {
    const dispatch=useDispatch();
    const [updateState] = React.useState();
    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const classes = useStyles();
    const post=useSelector((state)=>currentId?state.posts.find((p)=>p._id===currentId):null);
    const [postData, setpostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: ""});
    const clear=()=>{
        setpostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
        setCurrentId(null);
    }
  
    useEffect(()=>{
        if(post){setpostData(post)};
    },[post])
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
        }
        else{
            dispatch(createPosts(postData));
        }
        clear();
       
        
        console.log(postData);
        // document.location.reload();
        // window.location.reload(false);
   

    }
    // useEffect(() => { dispatch(getposts());console.log("hia") }, [handleSubmit]);

    return (
        <Paper className='classes.paper' >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">{currentId?'Editing':'Creating'} a memory </Typography>
                <TextField name="creator" variant='outlined' label='creator' fullWidth value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })}></TextField>
                <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })}></TextField>
                <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setpostData({ ...postData, message: e.target.value })}></TextField>
                <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setpostData({ ...postData, tags: e.target.value.split(',') })}></TextField>

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={(base64) => {console.log(base64);setpostData({ ...postData, selectedFile: base64.base64 });}}/>
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large'  fullWidth onClick={(e)=>handleSubmit(e)}>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={()=>{clear()}} fullWidth>Clear</Button>

            </form>

        </Paper>
    )
}
export default Form;