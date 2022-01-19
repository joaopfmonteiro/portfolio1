import React from "react";
import  "./body.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default () => {
    return(
<div className="body">
    <b className="name">
        I'm João Monteiro
    </b>
    <b className="introduction">
        Frontend Developer
    </b>
    <b className="job--logo">
        <b className="log--gitHub">
        <a href="https://github.com/joaopfmonteiro" target="_blank" ><GitHubIcon/></a>
        </b>
        <b className="log--linkdin">
            <a href="https://www.linkedin.com/in/joao-pereira-monteiro3/" target="_blank"><LinkedInIcon/></a>
        </b>
    </b>
</div>
    )

}
