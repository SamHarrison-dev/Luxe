import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './navBarIcons.css';

export const NavBarIcons = () => {


    return (
        <div className="navigationIcons">

            <FavoriteIcon className="iconRight" style={{ fontSize: '3rem' }} />
            <ShoppingCartIcon className="iconRightCart" style={{ fontSize: '3rem' }} />

        </div>
    )
}