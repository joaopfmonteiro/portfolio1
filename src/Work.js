import React from 'react';
import { useState } from 'react';
import Popup from './popup';

export default()=>{
    const[buttonPopup, setButtonPopup] = useState(false);
    return(
        <div className='react'>
            <div className='react-title'>React</div>
            <div className='react-work'>
                <div className='netflix'>netflix</div>
                <div className='hoqueiflix'>hoqueiflix</div>
                <div className='portfolio'>portfolio</div>
            </div>
            <button onClick={() => setButtonPopup(true)}>open popup</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>My popup</h3>
            </Popup>
        </div>
    )
}