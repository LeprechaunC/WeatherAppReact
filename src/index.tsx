import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Header from './components/header'; // Corrected import statement
import Footer from './components/footer';

 
import { useState, useEffect } from 'react';

import './components/header.css';
import './components/styles.css';
import './components/footer.css';
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
