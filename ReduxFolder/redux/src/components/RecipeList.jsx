import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../redux/features/recipes/recipeSlice'
import { Link } from 'react-router-dom'

function RecipeList() {
    const dispatch = useDispatch()
    const {list,status,error} = useSelector((state)=>state.recipes)

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchRecipes)
        }

    },[status, dispatch])

    if(status === 'loading') return <p>Recipe is loading...</p>
    if(status === 'failed') return <p>Error in Recipes Loading {error}</p>
   
  return (
    <div>
        <h2>
            Recipes
        </h2>
        <ul>
            {list.map((recipe)=>(
                <li key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                    </Link>
                    <img src={recipe.image} width= '150'/>
                    <p>{recipe.name}</p>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default RecipeList
