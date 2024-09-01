import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import "./App.css";
import {BrowserRouter} from 'react-router-dom'

const basename = '/client/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
)
