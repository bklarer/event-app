import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function EditEvent () {

    const [updateEvent, setUpdateEvent] = useState({
        title: "",
        description: "",
        img: "",
        date: "",
        time: ""
    })


    function handleChange(e) {
        const {name, value} = e.target
        setUpdateEvent((updateEvent) => ({...updateEvent, [name]: value}))
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
                        name="img"
                        onChange={handleChange}
                        value={updateEvent.img}
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>





        </div>




    )





}



export default EditEvent