import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Will need state that shows if a user is logged in, which will change what shows in Navigation


function Navigation () {



    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Event App</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link>
                        Signup
                    </Nav.Link>
                    <Nav.Link>
                        Login
                    </Nav.Link>
                </Nav>
            </Container>

        </Navbar>




    )


}


export default Navigation