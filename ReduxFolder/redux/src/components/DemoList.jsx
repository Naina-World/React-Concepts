import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/features/recipes/recipeSlice";




export default function DemoList() {
    const dispatch = useDispatch()

    const { list, status } = useSelector((state) => state.recipes);
    console.log(list);
    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>failed to load recipes...</p>

    return(
        <ul>
            {list.map((recipe) => (

                <li key={recipe.id}>{ recipe.name}</li>
            ))}
        </ul>
    )
}