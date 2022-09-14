import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const SearchResults = ({ recipeArray }) => {
    console.log(recipeArray[0]);
    if (recipeArray.length > 0) {
        return (
            <Card bg="warning">
                <Card.Title>We Found Some Recipes!:</Card.Title>
                <Stack  gap={2}>
                    {recipeArray.map( ({ title }, index) => { return (
                            <div className="bg-light border" key={ index }>{ title }</div>
                        )})
                    }
                </Stack>
            </Card>
        )
    }

};

export default SearchResults;