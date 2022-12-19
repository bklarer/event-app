import {Container, Row, Col} from "react-bootstrap";
import Side from "./Side"
import Login from "./Login"
import Signup from "./Signup"
import { Route, Routes } from "react-router-dom";

function Sidebar () {





    return (

        <Container >
        <Row className="justify-content-md-center">
            <Col xs={2} >      
              <Side />
            </Col>
            <Col  xs={8} >
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/signup" element={<Signup/>}/>
                </Routes>

            </Col>

        </Row>

    </Container>



    )


}


export default Sidebar