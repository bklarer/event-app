import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

// Will need state that shows if a user is logged in, which will change what shows in Navigation
// May want to change NavBar

function Navigation () {



    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Event App</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Link>
                        <NavLink style={{textDecoration: "none", color: "white"}}  to="/signup">Signup</NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink style={{textDecoration: "none", color: "white"}} to="/login">Login</NavLink>
                    </Nav.Link>
                </Nav>
            </Container>

        </Navbar>




    )


}


export default Navigation