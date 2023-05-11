
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './Styles';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
// import image from '../../assets/images.jpg'
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // console.log(user);
  // console.log(user.decoded.email);

  //Whenever our location changes we logIn or logout thus user is changed.
  useEffect(() => {
    const token = user?.tokenId;
    setUser(JSON.parse(localStorage.getItem('profile')));
    // console.log(location);
  }, [location]);
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    setUser(null);
  }
  const id = "1049411723138-bo0738amr05ukl35sm63441c4skq8o7o.apps.googleusercontent.com";
  // console.log(user);
  return (
    <div>

      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image}
            // src={pic}
            src="https://images.unsplash.com/photo-1607827447604-d9a8c439186e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVtb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            height="60px" />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.decoded.name} src={user?.decoded.picture}>{user?.decoded.name?.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user?.decoded.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>LogOut</Button>
            </div>
          ) :
            (
              <Button variant="contained" color="primary" component={Link} to="/auth" >Sign In</Button>
            )}
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar
