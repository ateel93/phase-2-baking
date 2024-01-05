import React from 'react'
import {useState} from 'react'
import Header from '../Header'
import NavBar from '../NavBar'
import { useOutletContext } from "react-router-dom";



function NewRecipeForm() {

    const {recipeList, setRecipeList} = useOutletContext()
    const [newImage, setNewImage] = useState ('')
    const [newName, setNewName] = useState ('')
    const [newServes, setNewServes] = useState ('')
    const [newIngred, setNewIngred] = useState ('')
    const [newPrep, setNewPrep] = useState ('')
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8000/recipes", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                image: newImage,
                name: newName,
                serves: newServes,
                ingredients: newIngred,
                prep: newPrep
            })
        })
        .then(res => res.json())
        .then(data => setRecipeList([...recipeList, data]))
    }


return(
    <div className="newform">
        <h2>Have a great recipe?</h2>
    {/* <img src="/images/bakeryform.jpg" /> */}
        <div className='newrecipesubmission'>
            <form onSubmit={handleSubmit}>
                <input type="text" id="image" placeholder="Recipe Image" value={newImage} onChange={event => setNewImage(event.target.value)} />
                <input type="text" id="name" placeholder="Recipe Name" value={newName} onChange={event => setNewName(event.target.value)} />
                <input type="text" id="serves" placeholder="Serving Qty" value={newServes} onChange={event => setNewServes(event.target.value)} />
                <input type="text" id="ingredients" placeholder="Ingredients" value={newIngred} onChange={event => setNewIngred(event.target.value)}/>
                <input type="text" id="prep" placeholder="Prep Time" value={newPrep} onChange={event => setNewPrep(event.target.value)}/>
                <button type="submit">Submit your favorite recipe!</button>
            </form>
        </div>
    </div>
  )
}


export default NewRecipeForm;