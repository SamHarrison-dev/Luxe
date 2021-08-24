import React from 'react';
import homeImage from '../../Images/homeFour.jpg';
import './homeCover.css';

export const HomeCover = () => {

    return (
        <div className="homeCoverContainer">
            <img src={homeImage} alt="home" className="homeImage"/>
        </div>
    )
}