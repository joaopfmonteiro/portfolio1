import React from 'react';
import { useState } from 'react';
import Popup from './popup';

export default()=>{
    const[buttonPopup, setButtonPopup] = useState(false);
    return(
        <div className='react'>
            <div className='react-title'>React</div>
            <div className='react-work'>
                <div className='netflix'><h1 onClick={() => setButtonPopup(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome.png?alt=media&token=f65e9ae9-1da6-44fa-a0a7-2d316256b322"/></h1>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>Netflix</h2>
                </Popup></div>
                <div className='hoqueiflix'><h1 onClick={() => setButtonPopup(true)}>Hoqueiflix</h1>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>hoqueiflix</h2>
                </Popup></div>
                <div className='portfolio'><h1 onClick={() => setButtonPopup(true)}>Portfolio</h1>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>portfolio</h2>
                </Popup></div>
            </div>
        </div>
    )
}