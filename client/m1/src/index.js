import React from 'react';
import ReactDom from 'react-dom';
import reducers from './reducers';
import R from './reducers/posts'
import App from './App';
import { useReducer } from 'react';

// import {Provider} from 'react-redux';
import {Provider} from 'react-redux';
//provider keep track of the store which is global state and 
//that allow to access that store from anywhere inside of the app
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css'
const store=createStore(reducers,compose(applyMiddleware(thunk)));
// console.log(reducers);
ReactDom.render(
    // <App/>
    
    <Provider store={store}><App/></Provider>
    // <App/>

,document.getElementById('root'));
