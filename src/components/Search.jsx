import React from "react"
import { useOutletContext } from "react-router-dom";



function Search({}) {

const{searchTerm, setSearchTerm} = useOutletContext()
    
    return(
        <div className="search-container">
            <input type="text" 
            placeholder="Search recipes..." 
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    );
}

export default Search;