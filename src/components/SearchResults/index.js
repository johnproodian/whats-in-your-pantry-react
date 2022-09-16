import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useState } from 'react';
import RecipeModal from '../RecipeModal';

const SearchResults = ({ recipeArray }) => {
    const [showModal, setShowModal] = useState(true);

    console.log(recipeArray[0]);
    if (recipeArray.length > 0) {
        return (
            <Card bg="warning">
                <RecipeModal 
                    // show={showModal} 
                    // onHide={() => setShowModal(false)} 
                />
                <Card.Title>We Found Some Recipes!:</Card.Title>
                <Stack  gap={2}>
                    {recipeArray.map( ({ title }, index) => { return (
                            <a className="bg-light border" key={ index } onClick={() => setShowModal(true)}>{ title }</a>
                        )})
                    }
                </Stack>
            </Card>
        )
    }

};

export default SearchResults;