import React from 'react';
import './footer.css'




export const Footer = () => {



    return (
        <footer className="pageFooter">
            <div className="leftFooterContainer">
                <span>Shop Now</span>
                <div className="shopList">
                    <ul>
                        <li><a href="/">Dresses</a></li>
                        <li><a href="/">Skirts</a></li>
                        <li><a href="/">Pants</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Knitwear</a></li>
                        <li><a href="/">Jackets & Coats</a></li>
                        <li><a href="/">Accessories</a></li>
                        
                    </ul>
                </div>
            </div>

            <div className="centerFooterContainer">
                <span>Help</span>
                <div className="helpList">
                    <ul>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">My Account</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                    </ul>
                    <ul>
                        <li><a href="/">Retailers</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Sustainability Project</a></li>
                        
                    </ul>
                </div>
            </div>

            <div className="rightFooterContainer">
                <span>Newsletter</span>
                <h3>Sign up and be the first to hear about our new releases!</h3>
                <input className="emailInput" placeholder="Enter Your Email Address" type="email"></input>
                <button className="signUpButton" type="submit">Sign up!</button>
            </div>



        </footer>
    )
}