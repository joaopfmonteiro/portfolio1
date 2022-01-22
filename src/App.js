import React from 'react';
import Body from './body.js';
import './App.css';
import About from './about'
import Resume from './Resume.js';
import Work from './Work.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr />
      <Routes>
      <Route exact path="/" element={<Body/>} />
      </Routes>
      <Routes>
      <Route path="/about" element={<About/>} />
      </Routes>
      <Routes>
      <Route path="/resume" element={<Resume/>} />
      </Routes>
      <Routes>
      <Route path="/work" element={<Work/>} />
      </Routes> 
      <Routes>
      <Route path="/contact" element={<Contact/>} />
      </Routes> 
    </div>
  </Router>
);

export default App;
    
=======
export default() => {
  return (
    <div className="app">
      <div className='header'><Header/></div>
      <div className='body'><Body/></div>
  </div>
  );

}



 