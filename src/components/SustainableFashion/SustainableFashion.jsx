import React from 'react';
import './sustainableFashion.css';
import sustainImage from '../../Images/SustainableFashion.jpeg';


export const SustainableFashion = () => {

    return (
        <div className="sustainableContainer">
            <div className="sustainableText">
                <h1>Playing our part for a sustainble future</h1>
                <hr />
            </div>
            <div className="sustainableImage">
                <img src={sustainImage} alt="sustainable" className="sustainablePicture" /> 
            </div>
        </div>
    )
}