import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context from './components/ContextProvider/Context';
import {BrowserRouter} from "react-router-dom"


import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
