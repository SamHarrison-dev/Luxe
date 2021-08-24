import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './searchBar.css';




export const SearchBar = () => {


    return (
        <div>
            <form action="/" method="GET">
                <input className="searchInput" type="text" placeholder="Explore..."></input>
                <SearchIcon className="searchIcon" fontSize="large"/>
            </form>
        </div>
    )
}