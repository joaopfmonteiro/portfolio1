import React from "react"
import "./contact.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default() =>{
    return(
        <div className="contact">
            <div className="contact-reference">Let's make</div>
            <div className="contact-reference-part2">something great!</div>
            <div className="contact-discription">I'm seeking out opportunities to collaborate with companies/ agencies/ individuals,
            not just work for them. I want to bring my experience to the table where we can work together to solve real business-problems
             in a way that optimizes all of our respective experience and knowledge.<br/>
             Fell free to reacth out through any plataforms bellow: </div>
            <div className="contact--logo">
            <b className="contact--gitHub">
            <a href="https://github.com/joaopfmonteiro" target="_blank" ><GitHubIcon/>GitHub</a>
            </b><br/><br/>
            <b className="contact--linkdin">
            <a href="https://www.linkedin.com/in/joao-pereira-monteiro3/" target="_blank"><LinkedInIcon/>LinkedIn</a>
            </b>
        </div>
    </div>
    )
}