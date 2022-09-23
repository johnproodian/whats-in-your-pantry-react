import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

const RecipeModal = ({ show, onHide, selectedRecipe }) => {
    console.log(selectedRecipe.recipeID);
    const [ingredientsArrState, setIngredientsArrState] = useState([]);
    let ingredientsArr = [];
    
    fetch(`https://api.spoonacular.com/recipes/${selectedRecipe.recipeID}/information?apiKey=c032a47155c24c00810c1214e2d4ad68&ingredients`)
        .then(res => res.json())
        .then(recipeInfo => {
            recipeInfo.extendedIngredients.forEach(ingredient => {
                ingredientsArr.push(ingredient.original);
                // setIngredientsArrState(ingredientsArr);
            });
            console.log(ingredientsArr);
    })
     
    // NEXT: make another api call with the the recipeID to get the full recipe details, then display them in modal
    
    
    // const handleClose = () => setShowModal(false);
    // const handleOpen = () => setShowModal(true);

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>{selectedRecipe.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    {ingredientsArrState.map(ingredient => { return (
                        <li>{ingredient}</li>
                    )})}
                </ul>
            </Modal.Body>
            <Button onClick={onHide}>Close</Button>
        </Modal>
        // <div className="modalBackdrop">
        //     <div className="modalContainer">
        //         <h1>This is a modal...</h1>
        //     </div>
        // </div>
    )
}

export default RecipeModal;