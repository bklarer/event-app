import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Signup from "../user/Signup";
import CreateEvent from "../events/CreateEvent";
import { Route, Routes } from "react-router-dom";
import Event from "../events/Event";
import Home from "./Home";
import EditEvent from "../events/EditEvent";
import { useSelector } from "react-redux";
import Account from "../user/Account";
import HostedEvents from "../events/HostedEvents";
import AttendingEvents from "../events/AttendingEvents";
import AllEvents from "../events/AllEvents";

function Layout() {
  const { userInfo } = useSelector((state) => state.user);

    // Need to look at refactoring Attending, Hosting, and AllEvents components
    // Don't know if I like all of the routes here

  const sidebar = (
    <Col md={3}>
      {" "}
      <Sidebar />{" "}
    </Col>
  );
  const showSidebar = userInfo ? sidebar : null;

  return (
    <Container>
      <Row className="justify-content-md-center">
        {showSidebar}

        <Col md={5}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/events" element={<AllEvents />} />
            <Route exact path="/events/new" element={<CreateEvent />} />
            <Route exact path="/events/hosting" element={<HostedEvents />} />
            <Route
              exact
              path="/events/attending"
              element={<AttendingEvents />}
            />
            <Route exact path="/events/:eventId" element={<Event />} />
            <Route exact path="/events/:eventId/edit" element={<EditEvent />} />
            <Route exact path="/account" element={<Account />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
