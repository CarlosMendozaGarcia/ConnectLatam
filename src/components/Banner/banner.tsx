import React, { ReactNode } from "react";
import "./style.css";

type BannerProps = {
    children?: ReactNode;
};

export const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <div className="banner">
            <img className="banner-img" src="src/assets/imgs/Enhypen.png" alt="Enhypen BoyBand" />
            <div className="gradient-overlay">{children}</div>
        </div>
    );
};

export default Banner;