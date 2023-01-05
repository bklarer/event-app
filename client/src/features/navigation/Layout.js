import {Container, Row, Col} from "react-bootstrap";
import Sidebar from "./Sidebar"
import Login from "../user/Login"
import Signup from "../user/Signup"
import CreateEvent from "../events/CreateEvent";
import { Route, Routes } from "react-router-dom";
import { useState } from "react"
import Event from "../events/Event";

function Layout () {

    const [loggedIn, setLoggedIn] = useState(true)

//If logged in, show <Side/>

    const sidebar = <Col xs={2} > <Sidebar /> </Col>
    const showSidebar = loggedIn ? sidebar : null

    console.log(showSidebar)

    return (

        <Container >
        <Row className="justify-content-md-center">
            {showSidebar} 
            <Col  xs={4} >
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route exact path="/event/new" element={<CreateEvent/>} />
                </Routes>
                <Event/>

            </Col>

        </Row>

    </Container>



    )


}


export default Layout