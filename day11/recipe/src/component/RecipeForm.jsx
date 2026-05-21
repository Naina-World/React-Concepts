import React, { useState, useTransition } from 'react'
import { number, z } from 'zod'

const recipeSchema = z.object({
    name: z.string().min(1, "Recipe name is reqiured"),
    ingredients: z.string().min(10, "Add more ingredients"),
    time: z.number().min(1, "Cooking time must be more than 0"),
});
function RecipeForm({ onAdd }) {
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [time, setTime] = useState('')
    const [errors, setErrors] = useState({})
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = recipeSchema.safeParse({
            name,
            ingredients,
            time: Number(time),
        })
        if (!result.success) {
            const fieldError = {}
            result.error.issues.forEach((err) => {
                fieldError[err.path[0]] = err.message;
            })

            setErrors(fieldError)
            return;
        }
        setErrors({});
        startTransition(() => {
            onAdd({
                name,
                ingredients,
                time : Number(time),
            });
        });

        
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a recipe</h2>
                <input type='text' value={name} placeholder='recipe name' onChange={(e) => setName(e.target.value)} />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                <textarea placeholder='add ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
                    <p>{ingredients.length} characters</p>
                    {errors.ingredients && <p style={{color: "red"}}>{errors.ingredients}</p>}
                <input type="number" placeholder='Cooking time (min)' value={time} onChange={(e) => setTime(e.target.value)} />
                {errors.time && <p style={{color: "red"}}>{errors.time}</p>}
                <button type='submit' disabled={isPending}>
                    {isPending ? "Adding....." : "Add recipe"}
                </button>
            </form>
        </div>
    )
}

export default RecipeForm
