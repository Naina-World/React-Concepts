import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {

    const[meal, setMeal] = useState(null);

    const {id} = useParams();
    const [isFav , setIsFav ] = useState(false)
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>res.json()).then((data)=>{
            setMeal(data.meals[0])
            const favs = JSON.parse(localStorage.getItem('favs')) || [];
            setIsFav(favs.includes(id))

        })
    },[id]);

    const toggleFav = ()=>{
        const favs = JSON.parse(localStorage.getItem('favs')) || [];
        let updated;
        if(isFav){
            updated = favs.filter((x)=>x !== id);
        }
        else{
            updated = [...favs ,id]
        }
        localStorage.setItem('favs',JSON.stringify(updated))
        setIsFav(!isFav);

    }
    if (!meal) return <p>Still Loading</p>

  return (
    <div style={{padding: '1rem'}}>
        <button onClick={toggleFav}>
            {isFav ?'remove from favorites':'add to favourites'}

        </button>
        <h3> Name : {meal.strMeal}</h3>
        <p>
            <strong>
                Category : {meal.strCategory}
            </strong>
        </p>
        <img src={meal.strMealThumb} alt="" />
        <h3>
            Instructions : {meal.strInstructions }
        </h3>
      
    </div>
  )
}

export default Recipe
