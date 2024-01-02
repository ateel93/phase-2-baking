import { useEffect, useState } from 'react'
import RecipeShow from "./RecipeShow"
import NewRecipeForm from './NewRecipeForm';
import Search from './Search';

function RecipeList() {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/recipes')
        .then(resp => resp.json())
        .then(data => setRecipeList(data))
    }, []);

    console.log(recipeList)

    return (
        <header>
        <h1>Recipes</h1>
        <RecipeShow recipes={recipeList} />
        <NewRecipeForm recipes={recipeList}/>
        <search recipeList={recipeList} setRecipeList={setRecipeList}/>
        </header>
    );
}

export default RecipeList;