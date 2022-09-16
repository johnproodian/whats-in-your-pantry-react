import Modal from 'react-bootstrap/Modal';

const RecipeModal = (props) => {
    

    // const handleClose = () => setShowModal(false);
    // const handleOpen = () => setShowModal(true);

    return (
        <Modal centered>
            <Modal.Header closeButton>
                Header!!!
            </Modal.Header>
            <button onClick={props.onHide}>Close</button>
        </Modal>
        // <div className="modalBackdrop">
        //     <div className="modalContainer">
        //         <h1>This is a modal...</h1>
        //     </div>
        // </div>
    )
}

export default RecipeModal;