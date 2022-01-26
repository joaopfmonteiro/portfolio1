import React from 'react';
import { useState } from 'react';
import Popup from './popup';
import './work.css';

export default()=>{
    const[buttonPopup, setButtonPopup] = useState(false);
    return(
        <div className='react'>
            <div className='react-work'>
                <div className='netflix'>
                    <div onClick={() => setButtonPopup(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/1.png?alt=media&token=07191321-d285-4071-8f32-a4ff883c64f7"/></div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h2 className='netflixBack'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome%20(3).png?alt=media&token=acebd199-b150-4e35-9c94-413b367ae974"/></h2>
                    </Popup></div>
                <div className='hoqueiflix'>
                    <div onClick={() => setButtonPopup(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/2.png?alt=media&token=c0d91130-58e2-4ef6-9c46-035832c0f37f"/></div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h2 className='hoqueiflixBack'><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome.png?alt=media&token=f65e9ae9-1da6-44fa-a0a7-2d316256b322"/></h2>
                    </Popup></div>
                <div className='portfolio'>
                    <div onClick={() => setButtonPopup(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Log%C3%B3tipo%20Preto%20e%20Dourado%20C%C3%ADrculo%20Imobili%C3%A1ria.png?alt=media&token=51c8473b-9dfc-4b1f-b02d-c5bcc26d1400"/></div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h4 className='portfolioBack'><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome.png?alt=media&token=f65e9ae9-1da6-44fa-a0a7-2d316256b322"/></h4>
                    </Popup></div>
            </div>
        </div>
    )
}