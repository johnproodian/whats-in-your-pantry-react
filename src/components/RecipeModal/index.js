import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

const RecipeModal = ({ show, onHide, selectedRecipeInfo }) => {
    console.log(selectedRecipeInfo);
    let { title, ingredientsArr, instructions, url } = selectedRecipeInfo;

    if (!selectedRecipeInfo || ingredientsArr.length === 0) {
        return;
    } else {
        const newInstructions = instructions.replace(/(<([^>]+)>)/gi, "");
        console.log(newInstructions);

        return (
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <p>{instructions}</p> */}
                    <h2>Ingredients</h2>
                    <ul>
                        {ingredientsArr.map((ingredient, index) => { return (
                            <li key={index}>{ingredient.original}</li>
                        )})}
                    </ul>
                    <h2>Instructions</h2>
                    <p>{newInstructions}</p>
                    <a href={url} target="_blank">View Recipe at Original Site</a>
                </Modal.Body>
                <Button onClick={onHide}>Close</Button>
            </Modal>
        )
    }

    
}

export default RecipeModal;