import React from "react";
import  "./body.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import About from './about'
import Work from './Work.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default () => {
    return(
<div className="body">
    <a href="./about" target="_blank">
    <b className="name">
    </b><br></br></a>
    <b className="name1">João</b><br></br>
    <b className="name2">Monteiro</b>




    
    {/* <b className="introduction">
        Front-End Developer
    </b>
    <b className="job--logo">
        <b className="log--gitHub">
            <a href="https://github.com/joaopfmonteiro" target="_blank" ><GitHubIcon/></a>
        </b>
        <b className="log--linkdin">
            <a href="https://www.linkedin.com/in/joao-pereira-monteiro3/" target="_blank"><LinkedInIcon/></a>
        </b>
    </b> */}
</div>
    )

}
