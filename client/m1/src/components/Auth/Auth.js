import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
// import Icon from './icon';
// import { signin, signup } from '../../actions/auth';
// import { AUTH } from '../../constants/actionTypes';
import useStyles from './Styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import dotenv from 'dotenv';
import { GoogleLogin,googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { signIn,signUp } from '../../actions/auth'; 
// import Input from './Input';
import makeStyles from './../../Styles';

function Auth() {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const [isSignup,setIsSignup] = useState(true);
  const classes = useStyles();
  const initialState = {firstName: '',lastName : '',email : '',passwrod : '',confirmPassword : '' };
  const [formData,setFormData]=useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if(isSignup){
      
      dispatch(signUp(formData,navigate));
    }
    else{
      
      dispatch(signIn(formData,navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name] : e.target.value});
  }
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  const switchMode=()=>{
    setIsSignup((prev)=>(!prev));
   setShowPassword(false);
  }
  const googleSuccess=async(res)=>{
   
    console.log(res);
    const tokenId=res?.credential;
    const decoded=jwt_decode(tokenId);
    
    console.log(decoded);
    try{
      dispatch({type:'AUTH',data:{decoded,tokenId}});
      navigate('/');
    }
    catch(error){
      console.log(error);
    }

  }
  const googleFailure=()=>{
    console.log("error");
  }
  const id ="1049411723138-bo0738amr05ukl35sm63441c4skq8o7o.apps.googleusercontent.com";

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container direction={"column"} spacing={2}>
              {
                (isSignup) && (
                  <>
                    <Grid item style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                    <Grid item >
                      <Input name="firstName" label="First Name" half={false} autoFocus handleChange={handleChange} handleShowPassword={handleShowPassword} type="text" />
                    </Grid>
                    <Grid item  >
                      <Input name="lastName" label="Last Name" autoFocus={false} half={false} handleChange={handleChange} handleShowPassword={handleShowPassword} type="text" />
                    </Grid>
                    </Grid>
                  </>
                )
              }
              <Grid item>
                < Input name="email" label="Email Address" half={undefined} autoFocus={!isSignup} handleChange={handleChange} handleShowPassword={handleShowPassword} type="text" />
              </Grid>
              <Grid item>
                < Input name="password" label="Password" half={undefined} autoFocus={false} handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password'} />
              </Grid>
              {isSignup && <Grid item>
                <Input name="confirmPassword" half={undefined} label="Repeat Password" autoFocus={false} handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? 'text' : 'password'}  ></Input></Grid>}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>submit</Button>
           <Grid container justify="flex-end">
                <Grid item>
               
                <GoogleOAuthProvider clientId={id} >
                  <GoogleLogin onSuccess={(res)=>googleSuccess(res)} onError={googleFailure} />
                </GoogleOAuthProvider>
              
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>

                  <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account ? Sign In' : "Don't have an account? Sign Up"} 
                  </Button>
              </Grid>
              </Grid>
                
          

       
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default Auth
