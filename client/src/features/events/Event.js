import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";




function Event () {
    const { eventId } = useParams()

//Will find if there is a ticket that matches the user and the event
    const defaultEvent = {title: "Event not Found", description: "", date: "", address: ""}
    const events = useSelector((state) => state.events.entities)
    const findEvent = events.find((event) => event.id === parseInt(eventId))

    const currentEvent = findEvent ? findEvent : defaultEvent

    console.log("findEvent", findEvent)
    console.log("eventId", eventId)
    console.log("events", events)


    return (


        <div>

            <img src={"https://media-cdn.tripadvisor.com/media/photo-s/00/18/a4/2b/watson-lake.jpg"} alt={"Event"}/>
            <h1>{currentEvent.title}</h1>
            <p>{currentEvent.date}</p>
            <p>{currentEvent.description}</p>
            <p>{currentEvent.address}</p>
            <p>People Attending:</p>
            <Button style={{"margin": "10px"}}>Going</Button>
            <Link to={`/events/${currentEvent.id}/edit`}>
                <Button style={{"margin": "10px"}}>Edit</Button>
            </Link>
            <Button style={{"margin": "10px"}}>Delete</Button>


        </div>


    )



}

export default Event