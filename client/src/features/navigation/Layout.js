import {Container, Row, Col} from "react-bootstrap";
import Sidebar from "./Sidebar"
import Signup from "../user/Signup"
import CreateEvent from "../events/CreateEvent";
import { Route, Routes } from "react-router-dom";
import { useState } from "react"
import Event from "../events/Event";
import Home from "./Home"




function Layout () {

    const [loggedIn, setLoggedIn] = useState(true)
//If logged in, show <Side/>

    const sidebar = <Col xs={2} > <Sidebar /> </Col>
    const showSidebar = loggedIn ? sidebar : null


    return (

        <Container >
        <Row className="justify-content-md-center">
            {showSidebar} 
            <Col  xs={4} >
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route exact path="/events/new" element={<CreateEvent/>} />
                    <Route exact path="/events/:eventId" element={<Event/>}/>
                </Routes>

            </Col>

        </Row>

    </Container>



    )


}


export default Layout