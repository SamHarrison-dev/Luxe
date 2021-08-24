import React from 'react';
import './coats.css';




export const Coats = (props) => {



    return (
        <div className={props.name}>
             <img  src={props.src} alt={props.name} className={props.name + 'Image'} onMouseEnter={e => (e.currentTarget.src = props.srcTwo)} onMouseLeave={e => e.currentTarget.src = props.src} />
             <h3 className="coatText">{props.productName}</h3> 
             <h4 className="coatPrice">£{props.price}</h4>
        </div>
    )
}