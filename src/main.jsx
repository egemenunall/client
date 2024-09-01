import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import "./App.css";
import {HashRouter} from 'react-router-dom'


const basename = '/client/';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
