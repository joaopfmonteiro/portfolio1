import React from 'react';
import { useState } from 'react';
import Popup from './popup';
import './work.css';



export default()=>{
    const[buttonPopup1, setButtonPopup1] = useState(false);
    const[buttonPopup2, setButtonPopup2] = useState(false);
    const[buttonPopup3, setButtonPopup3] = useState(false);
    return(
        <div className='react'>
            <div className='react-work'>
                <div className='netflix'>
                    <div className='netflixFront'onClick={() => setButtonPopup1(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/1.png?alt=media&token=07191321-d285-4071-8f32-a4ff883c64f7" alt="netflix front image"/></div>
                    <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                    <h2 className='netflixBack'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome%20(3).png?alt=media&token=acebd199-b150-4e35-9c94-413b367ae974" alt='netflix background image'/></h2>
                    </Popup>
                </div>
                <div className='hoqueiflix'>
                    <div className='hoqueiflixFront'onClick={() => setButtonPopup2(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/2.png?alt=media&token=c0d91130-58e2-4ef6-9c46-035832c0f37f" alt='hoqueiflix front image'/></div>
                    <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                    <h2 className='hoqueiflixBack'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome.png?alt=media&token=f65e9ae9-1da6-44fa-a0a7-2d316256b322" alt='hoqueiflix background image'/></h2>
                    </Popup>
                </div>
                <div className='portfolio'>
                    <div className='portfolioFront'onClick={() => setButtonPopup3(true)}><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Log%C3%B3tipo%20Preto%20e%20Dourado%20C%C3%ADrculo%20Imobili%C3%A1ria.png?alt=media&token=51c8473b-9dfc-4b1f-b02d-c5bcc26d1400" alt='portfolio front image'/></div>
                    <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                    <h2 className='portfolioBack'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/C%C3%B3pia%20de%20Sem%20nome.png?alt=media&token=ba81532e-b023-4ba5-be85-a8465236e026" alt='portfolio background image'/></h2>
                    </Popup>
                </div>
            </div>
        </div>
    )
}