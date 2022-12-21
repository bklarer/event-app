import { useState } from "react"
import Form from 'react-bootstrap/Form';




function EditEvent () {






    return (



        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control type="text" placeholder="Event Title" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Event Description</Form.Label> 
                    <Form.Control type="text" placeholder="Description" />
                </Form.Group>


            </Form>





        </div>




    )





}



export default EditEvent