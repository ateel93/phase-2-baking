import React from 'react' 

function RecipeShow({recipes}) {
    
    return(
        <>
        <div className="recipelist">{recipes.map(recipe => (<h2 key={recipe.id}>{recipe.name}</h2> ))}
        {recipes.map(recipe => (<img src={recipe.image} /> ))}
        </div>
        </>
    );
}

export default RecipeShow;