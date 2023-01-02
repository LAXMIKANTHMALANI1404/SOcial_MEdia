import React, { useState,useEffect } from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './Styles';
import {useDispatch} from 'react-redux';
import {getposts} from './actions/posts';
// import pic from './assets/memories.jpg';
import './App.css';

// import { getPosts } from './../../../server/controllers/posts';

const App=()=>{
  const dispatch=useDispatch();
  
  useEffect(()=>{dispatch(getposts());},[dispatch]);
  const [currentId, setCurrentId] = useState(null);
  const classes=useStyles();
  return (
   <Container maxWidth="lg">
    <AppBar className={classes.appBar} position='static' color="inherit">
      <Typography variant="h2" align="center">
          <img className={classes.image}
            // src={pic}
            src="https://images.unsplash.com/photo-1607827447604-d9a8c439186e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVtb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         height="60px"/>
          
        Memories
      </Typography>
        


    </AppBar>
    <Grow in >
      <Container>
        <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
          </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
        </Grid>
      </Container>
    </Grow>
   </Container>
  )
}

export default App;
