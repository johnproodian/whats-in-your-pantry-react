import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

const Header = () => {
    return (
        <Container fluid className="text-light" id="header">
            <div>
                <Link to="/">
                    <h1>What's in Your Pantry?</h1>
                </Link>  
            </div>
            <nav className="d-flex flex-column">
                <Link to="/">Search for Recipes</Link>
                <Link to="/saved">View Saved Recipes</Link>
            </nav>
            
        </Container>
    )
}

export default Header;