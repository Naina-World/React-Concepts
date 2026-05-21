import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeForm from './component/RecipeForm'
import RecipeList from './component/RecipeList'

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  const removeRecipe = (index) =>{
    setRecipes((prev) =>prev.filter((_,i) => i !== index));

  };

  return (
    <>

      <h2> 🍽️Recipe App</h2>

      <RecipeForm onAdd={addRecipe} />
      <RecipeList recipes = {recipes} onRemove = {removeRecipe}/>


    </>
  )
}

export default App
