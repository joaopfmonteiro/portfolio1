import React from 'react';
import Body from './body.js';
import './App.css';
import Header from './header.js';

export default() => {
  return (
    <div className="app">
      <div className='header'><Header/></div>
      <div className='body'><Body/></div>
  </div>
  );
  }