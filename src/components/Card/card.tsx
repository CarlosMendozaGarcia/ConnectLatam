import React, { ReactNode } from "react";
import './style.css'

type CardProps = {
    children?: ReactNode;
};

export const Card: React.FC<CardProps>= ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;