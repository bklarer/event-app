import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap";
import { useDispatch } from 'react-redux';
import { logout } from "../user/userSlice"

// Will need state that shows if a user is logged in, which will change what shows in Navigation
// May want to change NavBar

function NavigationBar () {
    const dispatch = useDispatch()
    // <NavLink style={{textDecoration: "none", color: "white", padding: 5}} to="/login">Login</NavLink>

    function handleLogoutClick () {
        fetch("/api/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if(r.ok) {
                console.log("logout")
                dispatch(logout)
            }
        })

    }


    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Event App</Navbar.Brand>
                <Nav className="d-flex">
                    <Nav.Item>
                        <LinkContainer style={{textDecoration: "none"}} to="/signup">
                            <Nav.Link style={{padding: 5}}>Signup</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer style={{textDecoration: "none"}} to="/">
                            <Nav.Link style={{padding: 5}}>Login</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer style={{textDecoration: "none"}} to="/events/new">
                            <Nav.Link style={{padding: 5}}>Create Event</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer style={{textDecoration: "none"}} to="/">
                            <Nav.Link onClick={handleLogoutClick} style={{padding: 5}}>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Container>

        </Navbar>




    )


}


export default NavigationBar