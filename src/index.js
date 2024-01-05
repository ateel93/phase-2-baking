import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { recipeLoader } from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeShow from './components/RecipeShow';
import NewRecipeForm from './components/Routes/NewRecipeForm';
import About from './components/Routes/About';
import RecipeList from './components/RecipeList';
import Contact from './components/Routes/Contact'
import Error from './components/Routes/Error'



const router = createBrowserRouter([

    {
      path: "/",
      element: <App />,
      children: [
      {
        path: "/",
        element: <About />,
        },
        {
          path: "/newrecipe",
          element: <NewRecipeForm />
      },
      {
          path: "/recipes",
          element: <RecipeList />
          
      },
      {
          path: "/contact",
          element: <Contact />
      }
        ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
