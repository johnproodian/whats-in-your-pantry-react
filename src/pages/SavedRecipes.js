import { useState } from 'react';

import SearchResults from '../components/SearchResults';


const SavedRecipes = () => {
    console.log(JSON.parse(window.localStorage.getItem('saved-recipes')));
    const [ recipeArr, setRecipeArr ] = useState(JSON.parse(window.localStorage.getItem('saved-recipes')) || []);



    return (
        <SearchResults 
            recipeArray={recipeArr}
            setRecipeArr={setRecipeArr}
            pageTitle={"Saved Recipes"}
        />
    )

}

export default SavedRecipes;