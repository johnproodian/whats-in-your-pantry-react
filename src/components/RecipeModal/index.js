import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RecipeModal = ({ show, onHide, selectedRecipe }) => {
    
    // NEXT: make another api call with the the recipeID to get the full recipe details, then display them in modal
    
    console.log(selectedRecipe.title);
    // const handleClose = () => setShowModal(false);
    // const handleOpen = () => setShowModal(true);

    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>{selectedRecipe.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{selectedRecipe.recipeID}</Modal.Body>
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