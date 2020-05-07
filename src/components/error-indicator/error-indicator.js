import React from "react";

import './error-indicator.css'
import icon from './pikachu-error-message.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img style={{width: "150px", height: "150px"}} src={icon} alt="error-indicator"/>
            <span className="oops">Oops!</span>
            <span>Something wrong happened!</span>
            <span>Pikachu is on his way to fix all the problems!</span>
        </div>
    )
}

export default ErrorIndicator