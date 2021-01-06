import React from 'react';
import ReactDOM from 'react-dom';
import {axios} from "./api/http"
import reportWebVitals from './reportWebVitals';
import "./assets/styles/reset.css"
import 'zent/css/index.css';
import {Provider} from 'react-redux'
import store from './store/index'
import { BrowserRouter } from "react-router-dom";



import App from "./App";

React.Component.prototype.$http=axios
ReactDOM.render(
  <BrowserRouter>
     <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
