import React from "react";
import  "./body.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default () => {
    return(
<div className="body">
    <a href="./about">
    <b className="name">
    </b><br></br></a>
    <a href="./work">
    <b className="name1"></b><br></br>
    </a>
    <a href="./contact">
    <b className="name2"></b>
    </a>




    
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
