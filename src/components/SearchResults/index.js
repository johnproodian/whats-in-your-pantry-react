import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import RecipeModal from '../RecipeModal';

const SearchResults = ({ recipeArray }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedRecipe, setSelectedRecipeID] = useState({});
    
    const handleRecipeSelection = (event) => {
        console.log(event.target.outerText);
        setSelectedRecipeID({title: event.target.outerText, recipeID: event.target.id })
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
                    selectedRecipe={selectedRecipe}
                />
            </Card>
        )
    }

};

export default SearchResults;