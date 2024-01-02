import React from "react"

function Search({recipeList, setRecipeList}) {
    return(
        <div className="search-container">
            <input type="text" 
            placeholder="Search recipes..." 
            value={recipeList}
            onChange={(event) => setRecipeList(event.target.value)}
            />
        </div>
    );
}

export default Search;