import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"




function Login () {

    const [login, setLogin] = useState({
        username: "",
        password: ""

    })

    function handleChange(e) {
        const {name, value} = e.target
        setLogin((login) => ({...login, [name]: value}))
    }


    return (

        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={login.username}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label> 
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={login.password}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>



    )




}


export default Login