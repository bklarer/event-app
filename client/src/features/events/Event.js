import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";


function Event () {
    const { eventId } = useParams()

//Will find if there is a ticket that matches the user and the event

    const currentEvent = useSelector((state) => state.events.entities.find((event) => event.eventId === eventId))

    

    console.log(currentEvent)
    console.log(eventId)
    return (


        <div>
            <img src={"https://media-cdn.tripadvisor.com/media/photo-s/00/18/a4/2b/watson-lake.jpg"} alt={"Event"}/>
            <h1>{currentEvent.title}</h1>
            <p>{currentEvent.date}</p>
            <p>{currentEvent.description}</p>
            <p>{currentEvent.address}</p>
            <p>People Attending</p>
            <Button>Going</Button>

            

        </div>


    )



}

export default Event