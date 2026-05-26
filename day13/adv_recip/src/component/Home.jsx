
// https://www.themealdb.com/api/json/v1/1/search.php?s= search by name

//// https://www.themealdb.com/api/json/v1/1/search.php?i=  search by id


import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Home() {

    const [recipe, setRecipe] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get("q") || "";

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then((resp)=>
            resp.json()).then((data) =>setRecipe(data.meals))
    } ,[query]);
  return (
    <div>
        <h2>
           Recipe App
        </h2>
        <input value={query} onChange={(e)=>setSearchParams({q:e.target.value})} placeholder='Search Recipe' />

        <ul>
            {recipe.map((meal)=>(

               <li key={meal.idMeal}>
                    <Link to={`/recipe/${meal.idMeal}`}> {meal.strMeal} </Link>

                </li>
           ) )}
        </ul>
      
    </div>
  )
}

export default Home
