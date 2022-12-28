import React, { useState } from 'react';
import useStyles from './Styles';
import { Typography, TextField, Paper, StepConnector,Button} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPosts} from '../../actions/posts'
const Form = () => {
    const dispatch=useDispatch();
    const classes = useStyles();
    const [postData, setpostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: ""});
    const clear=()=>{

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPosts(postData));
        console.log(postData);
    }
    return (
        <Paper className='classes.paper' >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Creating a memory </Typography>
                <TextField name="creator" variant='outlined' label='creator' fullWidth value={postData.creator} onChange={(e) => setpostData({ ...postData, creator: e.target.value })}></TextField>
                <TextField name="title" variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e) => setpostData({ ...postData, title: e.target.value })}></TextField>
                <TextField name="message" variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e) => setpostData({ ...postData, message: e.target.value })}></TextField>
                <TextField name="tags" variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e) => setpostData({ ...postData, tags: e.target.value })}></TextField>

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={(base64) => {setpostData({ ...postData, selectedFile: base64 });}}/>
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large'  fullWidth onClick={(e)=>handleSubmit(e)}>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={()=>{}} fullWidth>Clear</Button>

            </form>

        </Paper>
    )
}
export default Form;