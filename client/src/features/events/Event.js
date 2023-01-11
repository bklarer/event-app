import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { eventRemoved } from './eventsSlice';




function Event () {
    const { eventId } = useParams()
    const dispatch = useDispatch()
//Will find if there is a ticket that matches the user and the event
    const defaultEvent = {title: "Event not Found", description: "", date: "", address: ""}
    const events = useSelector((state) => state.events.entities)
    const findEvent = events.find((event) => event.id === parseInt(eventId))
    const navigate = useNavigate()
    
    const currentEvent = findEvent ? findEvent : defaultEvent

    function deleteEvent() {
        fetch(`/api/events/${eventId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(() => {
            dispatch(eventRemoved(eventId))
            navigate("./events")
    })
    }

    const formattedDate = currentEvent.date.slice(0, 10)
    const month = formattedDate.slice(5, 7)
    const day = formattedDate.slice(8,10)
    const year = formattedDate.slice(0 ,4)
    const eventDate = `${month}-${day}-${year}`

    const formattedTime = currentEvent.date.slice(11,16)
    const hour = formattedTime.slice(0,2)
    const minute = formattedTime.slice(3,5)

    const eventTime = parseInt(hour) > 12 ? `${hour - 12}:${minute} pm` : `${hour}:${minute}am`


    return (

            <Container className="justify-content-md-center">
                <Image width={360} className="fluid" src={"https://media-cdn.tripadvisor.com/media/photo-s/00/18/a4/2b/watson-lake.jpg"} alt={"Event"}/>

                    <h1>{currentEvent.title}</h1>
                    <p>{"Date: " + eventDate}</p>
                    <p>{"Time: " + eventTime}</p>
                    <p>{currentEvent.description}</p>
                    <h4>Address</h4>
                    <p>{currentEvent.address}</p>
                    <p>{currentEvent.city + ", " + currentEvent.state + " " + currentEvent.zip}</p>
                    <h5>People Attending: 5</h5>
                    <Button style={{"margin": "10px"}}>Going</Button>
                    <Link to={`/events/${currentEvent.id}/edit`}>
                        <Button style={{"margin": "10px"}}>Edit</Button>
                    </Link>
                    <Button onClick={deleteEvent} style={{"margin": "10px"}}>Delete</Button>
            </Container>



    )



}

export default Event