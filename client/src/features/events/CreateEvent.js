import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"



function CreateEvent () {

    const [newEvent, setNewEvent] = useState({
        title: "",
        description: "",
        img: "",
        date: "",
        time: ""
    })


    function handleChange(e) {
        const {name, value} = e.target
        setNewEvent((newEvent) => ({...newEvent, [name]: value}))
    }

    let date = new Date().toISOString().slice(0, 10)


    console.log(newEvent)

    return(



        <div>
            <h1>Create New Event</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Event Title" 
                        name="title"
                        onChange={handleChange}
                        value={newEvent.title}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Event Description</Form.Label> 
                    <Form.Control 
                        type="text" 
                        placeholder="Description"
                        name="description"
                        onChange={handleChange}
                        value={newEvent.description}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label> 
                    <Form.Control
                        type="text" 
                        placeholder="Image URL"
                        name="img"
                        onChange={handleChange}
                        value={newEvent.img}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label> 
                    <Form.Control 
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={newEvent.date}
                        min={date}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Time</Form.Label> 
                    <Form.Control 
                        type="time"
                        name="time"
                        onChange={handleChange}
                        value={newEvent.time}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>

        </div>



    ) 





}





export default CreateEvent