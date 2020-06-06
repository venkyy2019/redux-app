import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducer';

const middleWare = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleWare);
console.log(store.getState())

ReactDom.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));