import { useEffect, useState } from 'react'
import About from './components/Routes/About';
import RecipeList from './components/RecipeList';
import Header from './components/Header';
import RecipeShow from './components/RecipeShow';
import NavBar from './components/NavBar';
import Search from './components/Search';
import NewRecipeForm from './components/Routes/NewRecipeForm';
import { Outlet } from 'react-router-dom';

function App() {

  const [recipeList, setRecipeList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
      fetch('http://localhost:8000/recipes')
      .then(resp => resp.json())
      .then(data => setRecipeList(data))
  }, []);

  // const newSearch = recipeList.filter(recipe =>(recipe.name.toLowerCase().includes(searchTerm.toLowerCase())))

  const newSearch = recipeList.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    ||
    recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
    ||
    recipe.preptime.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="main-container">
    {/* <> */}
      <NavBar />
      <Header />
      <Outlet context={{searchTerm: searchTerm, setSearchTerm: setSearchTerm, newSearch: newSearch, recipeList: recipeList, setRecipeList: setRecipeList }} />
      {/* <Search />
      <RecipeList />
      <NewRecipeForm /> */}

    </div>
    // </>
  );
}


export default App;
