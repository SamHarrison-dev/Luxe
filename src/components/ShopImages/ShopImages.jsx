import React from 'react';
import { dressData, coatData } from '../../Data';
import { Dresses } from '../Dresses/Dresses';
import './shopImages.css';
import holidayImage from '../../Images/holidayImage.jpeg';
import { Coats } from '../Coats/Coats';
import footerImage from '../../Images/footerImage.jpeg';

export const ShopImages = () => {




    return (
        <>
        <div className="dressContainer">
            
                {dressData.map(dress => {
                return <Dresses className={dress.name} key={dress.id} name={dress.name} productName={dress.productName} src={dress.src} srcTwo={dress.srcTwo} price={dress.price} />
                 })}
        </div>
        <div className="shopCollectionButton">
            <button className="shopTheCollection"><span>SHOP THE COLLECTION</span></button>
        </div>
        <div className="holidayContainer">
            <div className="holidayImage">
                <img src={holidayImage} alt="holiday" />
            </div>
            <div className="holidayText">
                <h1>ON HOLIDAY: HOME OR AWAY!</h1>
                <h3>Showcase your style, wherever you decide to go.</h3>
                <text>Shop Now</text>  
            </div>

                </div>
            <div className="coatContainer">
            
                {coatData.map(coat => {
                    return <Coats className={coat.name} key={coat.id} name={coat.name} productName={coat.productName} src={coat.src} srcTwo={coat.srcTwo} price={coat.price} />
                })}
        </div>
        <div className="shopCollectionButton">
            <button className="shopTheCollection"><span>SHOP COATS & BLAZERS</span></button>
        </div>

            <div className="footerImage">
                <img src={footerImage} alt="" />
            </div>
        </>
    )
}