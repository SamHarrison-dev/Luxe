import {React, useState} from 'react';
import './navBar.css';
import { menuItemLists, MenuItems } from '../MenuItems/MenuItems';
import { DropDownShop } from '../DropDownShop/DropDownShop';
import { DropDownCollections } from '../DropDownCollections/DropDownCollections';
import { SearchBar } from '../SearchBar/SearchBar';
import { NavBarIcons } from '../NavBarIcons/NavBarIcons';



export const NavBar = () => {

    const [shopOpen, setShopOpen] = useState(true)
    
    const handleChangeShop = () => {
        setShopOpen(!shopOpen);
    }
    const [collectionOpen, setCollectionOpen] = useState(true);

    const handleChangeCollections = () => {
        setCollectionOpen(!collectionOpen);
    }

    
    return (
        <div className="navBarShell"> 
            <nav className="navBarContainer">
           
                <div className="leftBar">
                        
                    <ul className="leftBarList">
                        {menuItemLists.map(m => {
                         return  <MenuItems name={m.textName} className={m.className} key={m.id} menu={m.dropDown} shopOpen=    {shopOpen} onChangeShop={handleChangeShop} collectionOpen={collectionOpen} onChangeCollections= {handleChangeCollections} />
                         
                        })}
                    </ul>
                
                </div>               
                 <div className="centerBar">
                 <span className="logo"><a href="/">.L U X E</a></span>
                </div>
             <div className="rightBar">
                 <div className="searchBarContainer">
                    <SearchBar />
                 </div>
                 <div className="navBarIconsContainer">
                    <NavBarIcons />
                 </div>
                
                 
                 
             </div>
        
            </nav>
            {!shopOpen && <DropDownShop open={shopOpen} onChange={handleChangeShop}/>}
            {!collectionOpen && <DropDownCollections open={collectionOpen} onChange={handleChangeCollections}/>}
            
               
        </div>
    );
}