import Form from 'react-bootstrap/Form';



function Signup () {




    return (

        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label> 
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label> 
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>


            </Form>

        </div>


    )




}

export default Signup