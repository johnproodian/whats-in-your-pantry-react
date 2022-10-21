import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import RecipeModal from '../RecipeModal';

const SearchResults = ({ recipeArray, setSavedArr, pageTitle }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipeInfo, setSelectedRecipeInfo] = useState({ingredientsArr: []});
    console.log(pageTitle);
    

    const handleRecipeSelection = (event) => {
        console.log(event.target.parentNode.id);
        console.log(event.target.id)
        fetch(`https://api.spoonacular.com/recipes/${event.target.parentNode.id}/information?apiKey=0e0b3280fa56415e8970fd1084f47dc8`)
            .then(res => res.json())
            .then(recipeInfo => {
                console.log(recipeInfo);
                setSelectedRecipeInfo({ title: recipeInfo.title, instructions: recipeInfo.instructions, ingredientsArr: recipeInfo.extendedIngredients, url: recipeInfo.sourceUrl})
            })
        setShowModal(true);
    }

    const handleSave = (event) => {
        const recipeToSave = { id: event.target.parentNode.id, title: event.target.previousElementSibling.innerText}
        console.log(recipeToSave);
        let lsRecipes = JSON.parse(window.localStorage.getItem('saved-recipes'));
        if (!lsRecipes) {
            lsRecipes = [];
        }
        console.log(lsRecipes);
        lsRecipes.push(recipeToSave);
        console.log(lsRecipes);
        window.localStorage.setItem('saved-recipes', JSON.stringify(lsRecipes));
    }


if (recipeArray.length > 0) {
    const handleDelete = (event) => {
        console.log(event.target.parentNode.getAttribute('data-key'));
        let lsRecipes = JSON.parse(window.localStorage.getItem('saved-recipes')); 
        lsRecipes.splice(event.target.parentNode.getAttribute('data-key'), 1)
        setSavedArr(lsRecipes);
        window.localStorage.setItem('saved-recipes', JSON.stringify(lsRecipes));
    }


        return (
            <Card bg="warning">
                <Card.Title>{pageTitle}</Card.Title>
                <Stack  gap={2}>
                    <ul>
                        {recipeArray.map( ({ title, id }, index) => { return (
                            <li 
                                className="bg-light border d-flex justify-content-between" 
                                key={ index } 
                                id={id}
                                data-key={index}
                            >
                                <a  
                                    onClick={handleRecipeSelection}
                                a>
                                    { title }
                                </a>
                                <Button 
                                    size="sm" 
                                    className="d-flex flex-row justify-content-between"
                                    onClick={pageTitle === "We found some Recipes!:" ? handleSave : handleDelete}
                                >
                                    {pageTitle === "We found some Recipes!:" ? "Save" : "Delete"}
                                </Button>
                            </li>
                        )})} 
                    </ul>
                    
                </Stack>
                <RecipeModal 
                    show={showModal} 
                    onHide={() => setShowModal(false)}
                    selectedRecipeInfo={selectedRecipeInfo}
                />
            </Card>
        )
    }
};

export default SearchResults;