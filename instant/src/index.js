import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/Store';
import "./index.css";
import './Styles/Profile.css'
import './Styles/Follows.css'
import './Styles/Cards.css'
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);