import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { hostedEvents, eventsAttending } from "../user/userSlice";
import { futureEvents } from "../events/eventsSlice";

function Sidebar() {
  const { page } = useSelector((state) => state.navigation);
  const events = useSelector(futureEvents);
  const eventsHosted = useSelector(hostedEvents);
  const attendingEvents = useSelector(eventsAttending);

  const loadedEvents = () => {
    switch (page) {
      case "attending":
        return attendingEvents;
      case "hosting":
        return eventsHosted;
      default:
        return events;
    }
  };

  const loadEvents = loadedEvents().map((event) => {
    return (
      <Nav.Item key={event.id}>
        <LinkContainer to={`/events/${event.id}`}>
          <Nav.Link>{event.title}</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    );
  });

  return (
    <Nav
      className="col-md-12 d-md-block bg-light"
      activeKey="/events"
      variant="pills"
    >
      {loadEvents}
    </Nav>
  );
}

export default Sidebar;
