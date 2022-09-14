import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const SearchResults = () => {
    return (
        <Card bg="warning">
            <Card.Title>We Found Some Recipes!:</Card.Title>
            <Stack  gap={2}>
                <div className="bg-light border">First Recipe</div>
                <div className="bg-light border">Second Recipe</div>
                <div className="bg-light border">Third Recipe</div>
            </Stack>
        </Card>
    )
};

export default SearchResults;