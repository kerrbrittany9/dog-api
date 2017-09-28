import React from "react";
import ReactDOM from "react-dom";
import App from  "./components/App";
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers/dog-reducer';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  // reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
 document.getElementById('react-app-root')
);
