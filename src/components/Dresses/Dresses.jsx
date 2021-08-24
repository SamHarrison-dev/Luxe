import React from 'react';
import './Dresses.css';



export const Dresses = (props) => {



    return (

            <div className={props.name}>
                <img src={props.src} alt={props.name} className={props.name + 'Image'} onMouseEnter={e => (e.currentTarget.src = props.srcTwo)} onMouseLeave={e => e.currentTarget.src = props.src} />
                <h3 className="dressText">{props.productName}</h3> 
                <h4 className="dressPrice">£{props.price}</h4>
            </div>
                
            
    )
}