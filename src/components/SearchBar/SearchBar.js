import React from 'react';
import './SearchBar.scss';

const SearchBar=(props)=>{
    return(
        <input className="SearchBar" type="text" value={props.inputValue} onChange={props.filterCards}/>
    );
}

export default SearchBar;