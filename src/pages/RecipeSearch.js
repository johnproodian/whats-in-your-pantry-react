import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const RecipeSearch = () => {
    let searchIngredients = [];

    const [ formState, setFormState ] = useState('');

    const handleFormChange = (event) => {
        setFormState(event.target.value);
    };

    const handleAddIngredient = (event) => {
        event.preventDefault();
        const newIngredient = formState;
    }

    return (
        <Card bg="light" className="mx-3">
            <form className="p-3 mb-3 d-flex flex-column" onSubmit={handleAddIngredient}>
            {/* <div className="mb-3 d-flex flex-column"> */}
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
                {/* </div> */}

                <div>
                    <Stack gap={2}>
                        {/* <div className="bg-light border">First Ingredient</div>
                        <div className="bg-light border">Second Ingredient</div>
                        <div className="bg-light border">Third Ingredient</div> */}
                    </Stack>
                    <div id="big-btn-container" className="w-75 d-flex flex-row">
                        <div id="btn-container" className="m-3 d-flex flex-row justify-content-between">
                            <Button className="ingredient-btn" id="clear-btn">Clear Ingredients</Button>
                            <Button className="ingredient-btn" id="search-btn">Search Recipes</Button>
                        </div>
                    </div>
                    
                </div>
                
                
            
            </form>
            
            
        </Card>
        
    )
};

export default RecipeSearch;