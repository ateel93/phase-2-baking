import React from 'react' 
import { useState } from 'react'
import Header from './Header';
import Search from './Search';


function RecipeShow({recipe}) {

    
    const [flip, setFlip] = useState(true);

    return(
        <div>
            <div className="card" onClick={() => setFlip(prev => !prev)}>
                <img src={recipe.image}/>
            {
                flip ?
                <div className="Front" >
                    <h3>{recipe.name}</h3>
                    <h4>Prep time: {recipe.preptime}</h4>
                </div>
                :
                <div className="Back">
                    <h4>Serves: {recipe.serves}</h4>
                    <h4>Ingredients: {recipe.ingredients}</h4>
                </div>
            }
            </div>
        </div>
    );
}

export default RecipeShow;