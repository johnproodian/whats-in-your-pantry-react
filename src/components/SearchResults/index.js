import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import RecipeModal from '../RecipeModal';

const SearchResults = ({ recipeArray }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipeInfo, setSelectedRecipeInfo] = useState({ingredientsArr: []});

    const handleRecipeSelection = (event) => {
        console.log(event.target.id);
        fetch(`https://api.spoonacular.com/recipes/${event.target.id}/information?apiKey=0e0b3280fa56415e8970fd1084f47dc8`)
            .then(res => res.json())
            .then(recipeInfo => {
                console.log(recipeInfo);
                setSelectedRecipeInfo({ title: recipeInfo.title, instructions: recipeInfo.instructions, ingredientsArr: recipeInfo.extendedIngredients})
            })

        setShowModal(true);
    }

    if (recipeArray.length > 0) {
        return (
            <Card bg="warning">
                <Card.Title>We Found Some Recipes!:</Card.Title>
                <Stack  gap={2}>
                    {recipeArray.map( ({ title, id }, index) => { return (
                            <a className="bg-light border" key={ index } id={id} onClick={handleRecipeSelection}>{ title }</a>
                        )})
                    }
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