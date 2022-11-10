import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Router, Link } from 'react-router-dom';
import RecipeModal from '../RecipeModal';

const SearchResults = ({ recipeArray, setSavedArr, pageTitle }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipeInfo, setSelectedRecipeInfo] = useState({ingredientsArr: []});
    console.log(pageTitle);

    const updateSaveDelBtn = () => {
        const saveDelClass = "d-flex flex-row justify-content-between"
        if (pageTitle === "Saved Recipes") {
            return saveDelClass + " bg-success";
        } else {
            return saveDelClass + " bg-danger";
        }
    };
    

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
            console.log(lsRecipes);
            lsRecipes.splice(event.target.parentNode.getAttribute('data-key'), 1);
            console.log(lsRecipes);
            localStorage.setItem('saved-recipes', JSON.stringify(lsRecipes));
            window.localStorage.setItem('saved-recipes', JSON.stringify(lsRecipes));
            console.log('e.t: ', event.target.classList);
            event.target.classList.replace('btn-danger', 'btn-outline-danger')
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
                                <Link to=""
                                    onClick={handleRecipeSelection}
                                >
                                    { title }
                                </Link>
                                <Button 
                                    size="sm" 
                                    variant={pageTitle === "We found some Recipes!:" ? "success" : "danger"}
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