import React, { useEffect } from 'react';
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
  const classes=useStyles();
  return (
   <Container maxWidth="lg">
    <AppBar className={classes.appBar} position='static' color="inherit">
      <Typography variant="h2" align="center">
          <img className={classes.image}
            // src={pic}
         height="60px"/>
          
        Memories
      </Typography>
        


    </AppBar>
    <Grow in >
      <Container>
        <Grid container justifyContent="space-between" alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
              <Posts/>
          </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
        </Grid>
      </Container>
    </Grow>
   </Container>
  )
}

export default App;
