import NavagationBar from "./features/navigation/NavigationBar";
import Loading from "./features/navigation/Loading";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "./features/user/userSlice";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./features/navigation/Sidebar";
import Signup from "./features/user/Signup";
import CreateEvent from "./features/events/CreateEvent";
import { Route, Routes } from "react-router-dom";
import Event from "./features/events/Event";
import Home from "./features/navigation/Home";
import EditEvent from "./features/events/EditEvent";
import Account from "./features/user/Account";
import HostedEvents from "./features/events/HostedEvents";
import AttendingEvents from "./features/events/AttendingEvents";
import AllEvents from "./features/events/AllEvents";
import PageNotFound from "./features/navigation/PageNotFound";

function App() {
  const { loading, userInfo } = useSelector((state) => state.user);
  const eventLoading = useSelector((state) => state.events.loading);
  const dispatch = useDispatch();

  useEffect(() => dispatch(checkLogin()), [dispatch]);

  const sidebar = (
    <Col md={3}>
      {" "}
      <Sidebar />{" "}
    </Col>
  );
  const showSidebar = userInfo ? sidebar : null;

  return (
    <div className="App">
      {loading || eventLoading ? (
        <Loading />
      ) : (
        <>
          <NavagationBar />
          <Container>
            <Row className="justify-content-md-center">
              {showSidebar}

              <Col md={5}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route exact path="/events" element={<AllEvents />} />
                  <Route exact path="/events/new" element={<CreateEvent />} />
                  <Route
                    exact
                    path="/events/hosting"
                    element={<HostedEvents />}
                  />
                  <Route
                    exact
                    path="/events/attending"
                    element={<AttendingEvents />}
                  />
                  <Route exact path="/events/:eventId" element={<Event />} />
                  <Route
                    exact
                    path="/events/:eventId/edit"
                    element={<EditEvent />}
                  />
                  <Route exact path="/account" element={<Account />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
