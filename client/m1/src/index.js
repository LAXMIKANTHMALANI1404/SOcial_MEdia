import React from 'react';
import ReactDom from 'react-dom';
import reducers from './reducers';
import App from './App';
import { useReducer } from 'react';
import { getposts } from './actions/posts';
// import {Provider} from 'react-redux';
import {Provider} from 'react-redux';
//provider keep track of the store which is global state and 
//that allow to access that store from anywhere inside of   the app
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css'
import authReducer from './reducers/auth';


const store = createStore(reducers, compose(applyMiddleware(thunk)));
//createStore creates redux-store that holds the complete state tree of our app
//reducer is a function that returns the next state tree given current state tree and action to handle
//redux-thunk lets the action creators invert control by dispatching functions. They would receive dispatch as an argument and may call it asynchronously. Such functions are called thunks.
//To apply multiple store enhancers, we use compose().
ReactDom.render(
    // <App/>
    //provider wraps the children in such a way that store is available to all of its children
    <Provider store={store}><App/></Provider>
    // <App/>

,document.getElementById('root'));
