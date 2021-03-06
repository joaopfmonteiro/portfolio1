import React from 'react';
import Body from './body.js';
import './App.css';
import About from './about'
import Work from './Work.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => (
    <div className='backgroundh'>
  <Router>
      <div className='links'>
        <li><Link className='link-home' to="/">Home</Link></li>
      </div>

      <Routes>
      <Route exact path="/" element={<Body/>} />
      </Routes>
      <Routes>
      <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
      <Route path="/work" element={<Work/>} />
      </Routes> 
      <Routes>
      <Route path="/contact" element={<Contact/>} />
      </Routes>    
  </Router>
    </div>
);

 export default App;
