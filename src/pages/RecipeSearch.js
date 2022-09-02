import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const RecipeSearch = () => {
    return (
        <Card bg="success">
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>What ingredients do you have on hand?</Form.Label>
                <Form.Control type="textarea" placeholder="jelly beans"></Form.Control>
            </Form.Group>
            </Form>
            
            <Stack gap={2}>
                <div className="bg-light border">First Ingredient</div>
                <div className="bg-light border">Second Ingredient</div>
                <div className="bg-light border">Third Ingredient</div>
            </Stack>
        </Card>
        
    )
};

export default RecipeSearch;