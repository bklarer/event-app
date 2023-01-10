import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../user/userSlice"


function NavigationBar () {
    const dispatch = useDispatch()


    const {userInfo} = useSelector((state) => state.user)

    function handleLogoutClick () {
        fetch("/api/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if(r.ok) {
                console.log("logout")
                dispatch(logout())
                console.log("user info", userInfo)
            }
        })

    }

    const loggedInComponents =
        <>
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
        </>


    const loggedOutComponents = 
        <>
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
        </>

    console.log(userInfo)

    const componentsToShow = userInfo? loggedInComponents : loggedOutComponents

    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Event App</Navbar.Brand>
                <Nav className="d-flex" activeKey="/events">
                    {componentsToShow}
                </Nav>
            </Container>

        </Navbar>




    )


}


export default NavigationBar