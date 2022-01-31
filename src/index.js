import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './about'
import Work from './Work.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
