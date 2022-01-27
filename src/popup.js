import React from "react";
import './popup.css'


function Popup(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup--inner">
                <button className="close--btn" onClick={() =>props.setTrigger(false)}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-cff15.appspot.com/o/kisspng-computer-icons-button-close-5b21426cabc2f6.2484009715289063487036.png?alt=media&token=cd5b4b50-5719-4782-bc1f-b46614ba166b' width="20vw" height="20vh"/></button>
                {props.children}
            </div>
        </div>
    ) :"";
}
export default Popup