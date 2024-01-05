import { useEffect, useState } from 'react'
import RecipeShow from "./RecipeShow"
// import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import Search from './Search';

function RecipeList() {

    const {recipeList, newSearch} = useOutletContext()

   

    console.log(recipeList)

    return (
       <div id="recipe-container">
        <header>
        <h1>Recipes</h1>
        <Search />
        </header>
        <div id="existing-recipes">
        {newSearch.map((recipe) => (<RecipeShow key={recipe.id} recipe={recipe}/>))}
        </div>
        </div>
    );
}

// export function recipeLoader() {
//    const recipeRoute = useLoaderData();
   
//   }

export default RecipeList;