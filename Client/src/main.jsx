import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context from './components/ContextProvider/Context';
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
