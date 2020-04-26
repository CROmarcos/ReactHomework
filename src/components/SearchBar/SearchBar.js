import React from 'react';
import './SearchBar.scss';

const SearchBar=(props)=>{
    return(
        <input className="SearchBar" type="text" placeholder={props.backText} onChange={(e)=>props.onValueChange(e.target.value)}/>
    );
}

export default SearchBar;