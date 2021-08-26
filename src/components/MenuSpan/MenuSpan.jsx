import {React, useState} from 'react';
import './menuSpan.css'



export const MenuSpan = () => {

   const [shopAll, setShopAll] = useState(false);
   const [collection, setCollection] = useState(false);


   const handleShopClick = () => {
       if (collection){
           setCollection(!collection)
       }
       setShopAll(!shopAll)
   }

   const handleCollectionClick = () => {
       if (shopAll) {
           setShopAll(!shopAll)
       }
       setCollection(!collection)
   }
       


    return (
        <div className="menuSpanContainer"> 


            <div className="shopAllContainer">

             <span className="shopAll" onClick={handleShopClick}>Shop All +</span>
                  {shopAll && 
                  <div className="shopAllList">
                    <ul>
                    <a href="/"><li className="shopAllItem">Dresses</li></a>
                    <a href="/"><li className="shopAllItem">Skirts</li></a>
                    <a href="/"><li className="shopAllItem">Pants</li></a>
                    </ul>
                    <ul>
                    <a href="/"><li className="shopAllItem">Knitwear</li></a>
                    <a href="/"><li className="shopAllItem">Jackets & Coats</li></a>
                    <a href="/"><li className="shopAllItem">Accessories</li></a>
                    </ul>
                    </div>}
             
            </div>


            <div className="collectionContainer">
                    <span className="collections" onClick={handleCollectionClick}>Collections +</span>
                       {collection && <div className="collectionList">
                        <ul>
                            <li className="collectionItem">.LUXE Collection</li>
                            <li className="collectionItem">Autumn 21</li>
                            <li className="collectionItem">Winter 21</li>
                        </ul>
                        </div>}


            </div>


            <div className="galleryContainer">
                   <a href="/"><span className="gallery" onClick={handleCollectionClick}>Gallery</span></a>
            </div>

            <div className="aboutContainer">
                   <a href="/"><span className="about" onClick={handleCollectionClick}>About</span></a>
            </div>
            
        </div>
    )
}