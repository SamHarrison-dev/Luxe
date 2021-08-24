import {React} from 'react';
import './menuItems.css';

export const menuItemLists = [{
    id: 1,
    textName: 'SHOP',
    className: 'navBarShop',
    dropDown: true
}, {
    id: 2,
    textName: 'COLLECTIONS',
    className: 'navBarCollections',
    dropDown: true
}, {
    id: 3,
    textName: 'ABOUT',
    className: 'navBarCollections',
    dropDown: false
}, {
    id: 4,
    textName: 'GALLERY',
    className: 'navBarGallery',
    dropDown: false
}];


export const MenuItems = (props) => {
       
    
    const handleChange = () => {
    
        if(props.menu && props.name === 'SHOP'){
            if(!props.collectionOpen){
            props.onChangeCollections(!props.collectionOpen)
            }
            props.onChangeShop(!props.shopOpen);

            
            
        } else if (props.menu && props.name === 'COLLECTIONS'){
            if(!props.shopOpen){
                props.onChangeShop(!props.shopOpen);
            }
            props.onChangeCollections(!props.collectionOpen);
           
        } else if(!props.menu){
            if(!props.shopOpen){
                props.onChangeShop(!props.shopOpen)
            } else if(!props.collectionOpen){
                props.onChangeCollections(!props.collectionOpen)
            }
        }

    }
    
    return (
        
        <li onMouseEnter={handleChange} className={props.className}><a href="./" className="menuTextLink">{props.name}</a></li> 

           );
    
};