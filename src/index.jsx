import React from "react";
import ReactDOM from "react-dom";
import App from  "./components/App";
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/dog-reducer';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import registerServiceWorker from './components/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
 document.getElementById('react-app-root')
);
registerServiceWorker();
