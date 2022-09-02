import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <Container fluid>
            <div>
                <h1>What's in Your Pantry?</h1>
                <h2>Let us help you out.</h2>
            </div>
            <div>
                <ul>
                    <li>Search for Recipes</li>
                    <li>View Saved Recipes</li>
                </ul>
            </div>
            
        </Container>
    )
}

export default Header;