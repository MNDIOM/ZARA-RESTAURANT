import React, { useEffect } from 'react';
import './Intro.css';
import ZaraLogo from "./images/Logo.png";

const Intro = ({ onAnimationEnd }) => {
    useEffect(() => {
        const timer = setTimeout(onAnimationEnd, 2000); // Adjust time according to animation duration
        return () => clearTimeout(timer);
    }, [onAnimationEnd]);

    return (
        <div className="intro">
            <div className="logo"><img src={ZaraLogo} alt="" /></div>
        </div>
    );
};

export default Intro;