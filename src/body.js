import React from "react";
import  "./body.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default () => {
    return(
<div>
    <b className="name">
        I'm João Monteiro
    </b>
    <b className="introduction">
        I'm a frontend developer
    </b>
    <b className="job--logo">
        <GitHubIcon/>
        <LinkedInIcon/>
    </b>
</div>
    )

}
