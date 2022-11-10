import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
    const [formState, setFormState] = useState('');
    const [searchIngredients, setSearchIngredients] = useState(JSON.parse(window.localStorage.getItem('pantry-ingredients')) || []);
    const [recipes, setRecipes] = useState([]);
    const [bigWindow, setBigWindow]  = useState(window.innerWidth > 715);

    const handleFormChange = (event) => {
        setFormState(event.target.value);
        console.log('formState: ', formState);
    };

    const handleAddIngredient = (event) => {
        event.preventDefault();

        if (!formState) {
            alert("Please enter an ingredient to add it to the ingredient search list!")
            throw new Error("Nothing was typed into the input to add as an ingredient")
        }
        setSearchIngredients([...searchIngredients, formState])
        setFormState('');

    };

    const updateWindow = () => {
        setBigWindow(window.innerWidth > 715);
    }

    useEffect(() => {
        window.localStorage.setItem('pantry-ingredients', JSON.stringify(searchIngredients));
        console.log(searchIngredients)
    }, [searchIngredients])

    useEffect(() => {
        window.addEventListener("resize", updateWindow);
        return () => window.removeEventListener("resize", setBigWindow);
    })

    const deleteIngredients = () => {
        setSearchIngredients([]);
        window.localStorage.removeItem('pantry-ingredients');
    }

    const searchRecipes = () => {
        // let ingredients = searchIngredients.join();
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=0e0b3280fa56415e8970fd1084f47dc8&ingredients=${searchIngredients.join()}`)
            .then(res => res.json())
            .then(recipeData => {
                if (recipeData.length === 0) {
                    throw new Error("No recipes found with those ingredients.")
                }
                setRecipes(recipeData);
                console.log(recipes);

            })
            .catch(err => alert("No recipes found with those ingredients. Add different ingredients and try again!"));
    };

    return (
        <Card 
            bg="light" 
            className="mx-3"
            bigWindow={bigWindow}
        >
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
                    <Button type="submit" className="w-25 add-ingredient-btn bg-success">Add {bigWindow ? "Ingredients" : ""}</Button>
                </div>
               
                <div>
                    <Stack gap={2}>
                        {searchIngredients.map( (ingredient, index) => { return (
                            <div className="bg-primary text-light border mx-3 mt-2 p-2" key={index}>{ingredient}</div>)
                            })
                        }
                    </Stack>
    
                    <div id="big-btn-container" className="w-75 d-flex flex-row justify-content-start">
                        <Button className="ingredient-btn bg-danger" id="clear-btn" onClick={deleteIngredients}>Clear {bigWindow ? "Ingredients" : ""}</Button>
                        <Button className="ingredient-btn bg-success" id="search-btn" onClick={searchRecipes}>Search {bigWindow ? "Recipes" : ""}</Button>
                    </div>
                    
                </div>

                <SearchResults 
                    recipeArray={recipes} 
                    pageTitle={"We found some Recipes!:"}  />
            
            </form>
        </Card>
    )
};

export default SearchPage;