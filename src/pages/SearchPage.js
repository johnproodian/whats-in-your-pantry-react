import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
    const [formState, setFormState] = useState('');
    const [searchIngredients, setSearchIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const handleFormChange = (event) => {
        setFormState(event.target.value);
    };

    const handleAddIngredient = (event) => {
        event.preventDefault();
        const newIngredient = formState;
        setSearchIngredients([...searchIngredients, formState])
        setFormState('');
    };

    const deleteIngredients = () => {
        setSearchIngredients([]);
    }

    const searchRecipes = () => {
        // let ingredients = searchIngredients.join();
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=0e0b3280fa56415e8970fd1084f47dc8&ingredients=${searchIngredients.join()}`)
            .then(res => res.json())
            .then(recipeData => {
                setRecipes(recipeData);
                console.log(recipes);
            })
    };

    return (
        <Card bg="light" className="mx-3">
            <form className="p-3 mb-3 d-flex flex-column" onSubmit={handleAddIngredient}>
                <label className="mx-3 input-label">What ingredients do you have on hand?</label>
                <div id="input-container" className="d-flex flex-row">
                    <input 
                        type="text" 
                        placeholder="...jelly beans?" 
                        className="mx-3 w-75 form-control form-control-lg" 
                        rows="1"
                        id="ingredient-input"
                        onChange={handleFormChange}
                        value={formState}>
                    </input>
                    <Button type="submit" className="w-25 add-ingredient-btn">Add</Button>
                </div>
               
                <div>
                    <Stack gap={2}>
                        {searchIngredients.map( (ingredient, index) => { return (
                            <div className="bg-light border" key={index}>{ingredient}</div>)
                        })}
                    </Stack>
    
                    <div id="big-btn-container" className="w-75 d-flex flex-row justify-content-around">
                        <Button className="ingredient-btn" id="clear-btn" onClick={deleteIngredients}>Clear Ingredients</Button>
                        <Button className="ingredient-btn" id="search-btn" onClick={searchRecipes}>Search Recipes</Button>
                    </div>
                    
                </div>

                <SearchResults recipeArray={recipes}  />
            
            </form>
        </Card>
    )
};

export default SearchPage;