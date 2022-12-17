import React from 'react';
import ReactDom from 'react-dom';
import reducers from './reducers';
import App from './App';

// import {Provider} from 'react-redux';
import {Provider} from 'react-redux';
//provider keep track of the store which is global state and 
//that allow to access that store from anywhere inside of the app
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDom.render(
    // <App/>
    <Provider store={store}><App/></Provider>
    // <App/>

,document.getElementById('root'));
