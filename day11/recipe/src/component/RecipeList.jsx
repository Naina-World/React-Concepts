import React from 'react'
import RecipeItem from './RecipeItem'

function RecipeList({ recipes, onRemove }) {
    return (
        <div>
            <h3> recipes </h3>
            {recipes.length === 0 ? " No recipe left !!" : ""}
            {recipes.map((r, idx) => (

                <RecipeItem key={idx} recipe={r} onRemove={
                    () => onRemove(idx)
                } />
            ))}
        </div>
    )
}

export default RecipeList
