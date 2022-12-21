import {Container, Row, Col} from "react-bootstrap";
import Side from "./Side"
import Login from "../user/Login"
import Signup from "../user/Signup"
import CreateEvent from "../events/CreateEvent";
import { Route, Routes } from "react-router-dom";

function Sidebar () {


//If logged in, show <Side/>


    return (

        <Container >
        <Row className="justify-content-md-center">
            <Col xs={2} >      
              <Side />
            </Col>
            <Col  xs={4} >
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/signup" element={<Signup/>}/>
                    <Route exact path="/event/new" element={<CreateEvent/>} />
                </Routes>

            </Col>

        </Row>

    </Container>



    )


}


export default Sidebar