import React from 'react';
import { SearchBarSection, SearchBarInput } from './SearchBarStyle';

const SearchBar=(props)=>{
    return(
        <SearchBarSection>
            <SearchBarInput type="text" placeholder={props.backText} onChange={(e)=>props.onValueChange(e.target.value)}/>
        </SearchBarSection>
    );
}

export default SearchBar;