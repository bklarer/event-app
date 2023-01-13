import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";



function Sidebar() {

    const events = useSelector((state) => state.events.entities)
    const eventStatus = useSelector((state) => state.events.status)
    const { page } = useSelector((state) => state.navigation)
    const user = useSelector((state) => state.user.userInfo)


    const hostedEvents = user.created_events
    const eventsAttending = user.events

    const loadedEvents = () => {
        switch(page) {
            case "attending":
                return eventsAttending
            case "hosting":
                return hostedEvents
        default: return events
        }}

    const loadEvents = 
            loadedEvents().map((event) => {
                return (
                    <Nav.Item key={event.id}>
                        <LinkContainer to={`/events/${event.id}`}>
                            <Nav.Link>{event.title}</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                )
            })


    return (

        <Nav className="col-md-12 d-md-block bg-light"
        activeKey="/events"
        variant="pills"
        >
            {loadEvents}

        </Nav>



    )



}


export default Sidebar