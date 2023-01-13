import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../user/userSlice";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.navigation);
  const { userInfo } = useSelector((state) => state.user);

  const loadedEvents = () => {
    switch (page) {
      case "attending":
        return "Attending";
      case "hosting":
        return "Hosting";
      case "all":
        return "All events";
      default:
        return null;
    }
  };

  function handleLogoutClick() {
    fetch("/api/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("logout");
        dispatch(logout());
      }
    });
  }

  const loggedInComponents = (
    <>
      <NavDropdown menuVariant="dark" title="Events">
        <LinkContainer style={{ textDecoration: "none" }} to="/events">
          <NavDropdown.Item>All Events</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer
          style={{ textDecoration: "none" }}
          to="/events/attending"
        >
          <NavDropdown.Item>Attending</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer style={{ textDecoration: "none" }} to="/events/hosting">
          <NavDropdown.Item>Hosting</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer style={{ textDecoration: "none" }} to="/events/new">
          <NavDropdown.Item>Create Event</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
      <Nav.Item>
        <LinkContainer style={{ textDecoration: "none" }} to="/account">
          <Nav.Link style={{ padding: 5 }}>Account</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer style={{ textDecoration: "none" }} to="/">
          <Nav.Link onClick={handleLogoutClick} style={{ padding: 5 }}>
            Logout
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </>
  );

  const loggedOutComponents = (
    <>
      <Nav.Item>
        <LinkContainer style={{ textDecoration: "none" }} to="/signup">
          <Nav.Link style={{ padding: 5 }}>Signup</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer style={{ textDecoration: "none" }} to="/">
          <Nav.Link style={{ padding: 5 }}>Login</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </>
  );

  const componentsToShow = userInfo ? loggedInComponents : loggedOutComponents;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Event App</Navbar.Brand>
        <Navbar.Text>{loadedEvents()}</Navbar.Text>
        <Nav className="d-flex" activeKey="/events">
          {componentsToShow}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
