import React from 'react'
import {AiOutlineSearch} from "react-icons/ai";
import '../Components/Search.css'

const Search = () => {
    return(
        <nav className='mySearchBox'>
            <input 
                type='text'
                placeholder="Search"
                className='searchFilter'
            />
            <AiOutlineSearch size={20}  className="searchLogo"/>
        </nav>
    );
}

export default Search