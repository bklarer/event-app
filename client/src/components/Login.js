import Form from 'react-bootstrap/Form';





function Login () {




    return (

        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label> 
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


            </Form>
        </div>



    )




}


export default Login