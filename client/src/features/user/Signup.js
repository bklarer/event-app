import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"


function Signup () {

    const [signup, setSignup] = useState({
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: ""
    })



    function handleChange(e) {
        const {name, value} = e.target
        setSignup((signup) => ({...signup, [name]: value}))
    }

    console.log(signup)

    return (

        <div>
            <h1>Signup</h1>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={signup.username}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="First Name" 
                        name="first_name"
                        onChange={handleChange}
                        value={signup.first_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Last Name" 
                        name="last_name"
                        onChange={handleChange}
                        value={signup.last_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label> 
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={signup.password}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label> 
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password"
                        name="confirm_password"
                        onChange={handleChange}
                        value={signup.confirm_password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>

        </div>


    )




}

export default Signup