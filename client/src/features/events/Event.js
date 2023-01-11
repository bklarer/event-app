import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { eventRemoved, ticketAdded, ticketRemoved } from './eventsSlice';
import { useEffect, useState } from "react" 




function Event () {
    const { eventId } = useParams()
    const dispatch = useDispatch()
//Will find if there is a ticket that matches the user and the event
    const defaultEvent = {title: "Event not Found", description: "", date: "", address: ""}
    const events = useSelector((state) => state.events.entities)
    const currentUser = useSelector((state) => state.user.userInfo)
    const findEvent = events.find((event) => event.id === parseInt(eventId))
    const navigate = useNavigate()
    const [isGoing, setIsGoing] = useState(false)
    


    function deleteEvent() {
        fetch(`/api/events/${eventId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        // .then(response => response.json())
        .then(() => {
            navigate(`./events/${events.first}`)
            dispatch(eventRemoved(eventId))
    })
    }
    
    const currentEvent = findEvent ? findEvent : defaultEvent
    
    const goingButton = isGoing ? "Don't Go" : "Go"

    const userTicket = currentEvent ? currentEvent.tickets.find(ticket => ticket.user_id === currentUser.id) : null
    
    useEffect(() =>{
        if(userTicket) {
            setIsGoing(true)
        } else setIsGoing(false)

    }, [userTicket])


    const createTicketFetch = () => {
        fetch("/api/tickets",{
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json"
            },
            body: JSON.stringify({user_id: currentUser.id, event_id: currentEvent.id})
        })
        .then((response) => response.json())
        .then(ticket => {
            dispatch(ticketAdded(ticket))
        })
    }

    const deleteTicketFetch  = () => {
        fetch(`/api/tickets/${userTicket.id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            dispatch(ticketRemoved({eventId: currentEvent.id , ticketId: userTicket.id }))
        })
    }

    const handleGoingClick = () => {
        isGoing ? deleteTicketFetch() : createTicketFetch()
    }

    const goingButtonStyle = isGoing ? "secondary" : "success"

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
                    <h5>People Attending: {currentEvent.length}</h5>
                    <Button variant={goingButtonStyle} onClick={handleGoingClick} style={{"margin": "10px"}}>{goingButton}</Button>
                    <Link to={`/events/${currentEvent.id}/edit`}>
                        <Button variant="warning" style={{"margin": "10px"}}>Edit</Button>
                    </Link>
                    <Button variant="danger" onClick={deleteEvent} style={{"margin": "10px"}}>Delete</Button>
            </Container>



    )



}

export default Event