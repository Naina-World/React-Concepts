import React from 'react'

function RecipeItem({ recipe, onRemove }) {
    return (
        <div style={{border:'1px solid orange',margin: "10px", padding:"10px"}}>
            <h4>{recipe.name}</h4>
            <p><strong>Ingredints:</strong>
                {recipe.ingredients}
            </p>
            <p>
               <strong>Recipe Time:</strong>
                {recipe.time} mins
            </p>
            <button onClick={onRemove}> Remove</button>


        </div>
    )
}

export default RecipeItem
