import Form from 'react-bootstrap/Form';
import { useState } from "react"



function CreateEvent () {





    return(



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





export default CreateEvent