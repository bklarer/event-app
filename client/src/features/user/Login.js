import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import  { userLogin } from "./userActions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"



function Login () {
    const {userInfo} = useSelector((state) => state.user)
    const events = useSelector((state) => state.events.entities)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        username: "",
        password: ""

    })

    const firstEvent = events[0]


    function handleChange(e) {
        const {name, value} = e.target
        setLogin((login) => ({...login, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(userLogin(login))
        navigate(`/events/${firstEvent.id}`)
    }


    return (

        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
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