import React from 'react';
import './dropDownShop.css'
import resort from '../../Images/stockImage.jpeg';

export const DropDownShop = (props) => {

    const handleMouseLeave = () => {
        props.onChange(!props.open);
    }

    return (

        <div className="shopDropContainer"  onMouseLeave={handleMouseLeave}>
            <div className="shopLeft">
                <ul className="listItems">
                    <li className="shopTitle">Discover</li>
                    <li className="shopItem"><a href='/'>All Products</a></li>
                    <li className="shopItem"><a href='/'>New In</a></li>
                    <li className="shopItem"><a href='/'>Design</a></li>
                    <li className="shopItem"><a href='/'>Best Sellers</a></li>
                </ul>
             </div>
           
           
            <div className="shopMiddle">       
                <ul className="listItems">
                    <li className="shopTitleStyle">Style</li>
                </ul>
                <div className="wrapper">
                    <ul className="listItem2">
                        <li className="shopItem"><a href='/'>Dresses</a></li>
                        <li className="shopItem"><a href='/'>Skirts</a></li>
                        <li className="shopItem"><a href='/'>Tops</a></li>
                        <li className="shopItem"><a href='/'>Pants</a></li>
                    </ul>
                    <ul className="listItem2">
                        <li className="shopItem"><a href='/'>Coats & Blazers</a></li>
                        <li className="shopItem"><a href='/'>Knitwear</a></li>
                        <li className="shopItem"><a href='/'>Shorts</a></li>
                        <li className="shopItem"><a href='/'>Accessories</a></li>
                    </ul>
                </div> 
            </div>


            <div className="shopRight">
                <ul className="listItems">
                    <li className="shopTitle">Collections</li>
                    <li className="shopItem"><a href="/">Siganture .LUXE</a></li>
                    <li className="shopItem"><a href="/">Autumn 2021</a></li>
                    <li className="shopItem"><a href="/">Winter 2021</a></li>
                    <li className="shopItem"><a href="/">Get The Style</a></li>
                </ul>
            </div>



            <div className="shopImage">
                <div className="imageContainer">
                    <img className="resortImage" src={resort} alt="here" /> <br/> <br/>
                   
                </div>
                
            </div>
        </div>
    )
}