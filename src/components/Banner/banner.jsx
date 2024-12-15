import React from "react";
import "./style.css";

export const Banner = (props)=> {
    return (
        <div className='banner'>
            <img src="src\assets\imgs\Enhypen.png"  alt="Enhypen BoyBand" />
            <div className= "gradient-overlay">
                {props.children}
            </div>
        </div>
    )
}