import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { eventUpdated } from './eventsSlice'


function EditEvent () {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const [updateEvent, setUpdateEvent] = useState({
        title: "",
        description: "",
        img_url: "",
        date: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        creator_id: 0
    })

    const { eventId } = useParams()


    function handleChange(e) {
        const {name, value} = e.target
        setUpdateEvent((updateEvent) => ({...updateEvent, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/api/events/${eventId}/edit`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({updateEvent})
        })
        .then(resp => resp.json())
        .then(event => {
            dispatch(eventUpdated(event))
        })


    }


    let date = new Date().toISOString().slice(0, 10)


    return (



        <div>
            <Form>
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
                        type="text" 
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
                    <Form.Label>Address</Form.Label> 
                    <Form.Control 
                        type="text"
                        name="address"
                        onChange={handleChange}
                        value={updateEvent.address}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label> 
                    <Form.Control 
                        type="text"
                        name="city"
                        onChange={handleChange}
                        value={updateEvent.city}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label> 
                    <Form.Control 
                        type="text"
                        name="state"
                        onChange={handleChange}
                        value={updateEvent.state}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Zip</Form.Label> 
                    <Form.Control 
                        type="text"
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