import UseStyles from '../../Styles'
import { Container, Grow, Grid } from '@material-ui/core';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getposts } from '../../actions/posts';
function Home() {
    const classes=UseStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect(() => { dispatch(getposts()); }, [currentId, dispatch]);
  return (
    <div>
          <Grow in >
              <Container>
                  <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems='stretch' spacing={3} >
                      <Grid item xs={12} sm={7}>
                          <Posts setCurrentId={setCurrentId} />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                          <Form currentId={currentId} setCurrentId={setCurrentId} />
                      </Grid>
                  </Grid>
              </Container>
          </Grow>
    </div>
  )
}

export default Home
