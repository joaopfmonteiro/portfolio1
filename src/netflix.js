import React from "react";
import Popup from './popup';
function Netflix() {
    return(
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h2 className='netflixBack'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/Design%20sem%20nome%20(3).png?alt=media&token=acebd199-b150-4e35-9c94-413b367ae974"/></h2>
                    </Popup>
    )
}
export default Netflix
