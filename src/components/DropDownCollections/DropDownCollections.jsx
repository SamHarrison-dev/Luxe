import React from 'react';
import './dropDownCollections.css';
import winter from '../../Images/winterFashion.jpeg';
import fall from '../../Images/fallFashion.jpeg';
import luxe from '../../Images/luxeFashion.jpeg';


export const DropDownCollections = (props) => {

    const handleMouseLeave = () => {
        props.onChange(!props.open);
    }

    return (
        <div className="collectionDropContainer"  onMouseLeave={handleMouseLeave}>

            <div className="collectionOne">
                <div className="fallContainer">
                    <img src={fall} alt="fall" width="320" height="320"/>
                </div>
                
                <span className="fall">Autumn 21</span>
            </div>

            <div className="collectionTwo">
                
                <div className="luxeContainer">
                    <img src={luxe} alt="luxe Fashion" />
                </div>
                <span className="luxeCollection">.LUXE Collection</span>
            </div>

            <div className="collectionThree">

                <div className="winterContainer">
                    <img src={winter} alt="winter" width="320" height="320" />
                </div>
                <span className="winter">Winter 21</span>
            </div>
            
        </div>
    )


}