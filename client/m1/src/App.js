import React from 'react';
import { Container } from '@material-ui/core';

import useStyles from './Styles';
import { useTheme } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  const theme = useTheme();

  const classes = useStyles(theme);
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth"  element={<Auth/>}/>
        </Routes>
      </Container>
    </BrowserRouter>

  )
}

export default App;
