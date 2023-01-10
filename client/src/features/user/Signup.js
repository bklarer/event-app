import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from './userActions';
import { useNavigate } from 'react-router-dom';



function Signup () {
    const { loading, userInfo, error, success} = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signup, setSignup] = useState({
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirmation: ""
    })



    function handleChange(e) {
        const {name, value} = e.target
        setSignup((signup) => ({...signup, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(registerUser(signup))
            setSignup({
                username: "",
                first_name: "",
                last_name: "",
                password: "",
                confirm_password: ""
            })
        navigate("/")
    }


    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch(`/api/signup`, {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify(signup)
    //     })
    //     .then(resp => resp.json())
    //     .then(user => {
    //         console.log(user)
            // setSignup({
            //     username: "",
            //     first_name: "",
            //     last_name: "",
            //     password: "",
            //     confirm_password: ""
            // })
    //     })
    // }

    console.log(signup)

    return (

        <div>
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                        value={signup.username}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="First Name" 
                        name="first_name"
                        onChange={handleChange}
                        value={signup.first_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Last Name" 
                        name="last_name"
                        onChange={handleChange}
                        value={signup.last_name}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label> 
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={signup.password}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label></Form.Label> 
                    <Form.Control 
                        type="password" 
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        onChange={handleChange}
                        value={signup.password_confirmation}
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