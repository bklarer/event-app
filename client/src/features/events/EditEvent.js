import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { eventUpdated, selectEventById } from './eventsSlice'

function EditEvent () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { eventId } = useParams()

    
    const [updateEvent, setUpdateEvent] = useState({
        title: "",
        description: "",
        img_url: "",
        date: "",
        time: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    })

    const selectedEvent = useSelector(state => selectEventById(state, parseInt(eventId)))


    const formattedEvent = {
        title: updateEvent.title,
        description: updateEvent.description,
        img_url: updateEvent.img_url,
        date: updateEvent.date + "T" + updateEvent.time + ":00",
        address: updateEvent.address,
        city: updateEvent.city,
        state: updateEvent.state,
        zip: updateEvent.zip,
        creator_id: selectedEvent.creator_id
    }

    useEffect(() => setUpdateEvent({
        title: selectedEvent.title,
        description: selectedEvent.description,
        img_url: selectedEvent.img_url,
        date: selectedEvent.date.slice(0, 10),
        time: selectedEvent.date.slice(11, 16),
        address: selectedEvent.address,
        city: selectedEvent.city,
        state: selectedEvent.state,
        zip: selectedEvent.zip,
    }),[selectedEvent])
    

    function handleChange(e) {
        const {name, value} = e.target
        setUpdateEvent((updateEvent) => ({...updateEvent, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/api/events/${eventId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formattedEvent)
        })
        .then(resp => resp.json())
        .then(event => {
            dispatch(eventUpdated(event))
            navigate(`/events/${eventId}`)
        })
    }
    
    let date = new Date().toISOString().slice(0, 10)

    return (



        <div>
            <h1>Edit Event</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Event Title" 
                        name="title"
                        onChange={handleChange}
                        value={updateEvent.title}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Event Description</Form.Label> 
                    <Form.Control 
                        as="textarea" 
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                        value={updateEvent.description}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label> 
                    <Form.Control
                        type="text" 
                        placeholder="Image URL"
                        name="img_url"
                        onChange={handleChange}
                        value={updateEvent.img_url}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label> 
                    <Form.Control 
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={updateEvent.date}
                        min={date}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Time</Form.Label> 
                    <Form.Control 
                        type="time"
                        name="time"
                        onChange={handleChange}
                        value={updateEvent.time}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label> 
                    <Form.Control 
                        type="text"
                        placeholder="Address"
                        name="address"
                        onChange={handleChange}
                        value={updateEvent.address}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label> 
                    <Form.Control 
                        type="text"
                        placeholder="City"
                        name="city"
                        onChange={handleChange}
                        value={updateEvent.city}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label> 
                    <Form.Control 
                        type="text"
                        placeholder="State"
                        name="state"
                        onChange={handleChange}
                        value={updateEvent.state}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Zip</Form.Label> 
                    <Form.Control 
                        type="text"
                        placeholder="Zip"
                        name="zip"
                        onChange={handleChange}
                        value={updateEvent.zip}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>





        </div>




    )





}



export default EditEvent