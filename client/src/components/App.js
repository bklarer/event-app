import '../App.css';
import Navagation from './Navigation';
import Sidebar from './Sidebar';
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


/*

Frontend

sidebar through bootstrap?

Components
  1. Signup Form
  2. Login
  3. Events (create filter for My Events)
        - Sidebar
        - Event - map out
        - Single Event Page
  4. Create Event


  Create Redux dependancies and state

  Should I have 2 navigation components?

Backend
1. Create Models, Controllers, Serializers, Routes
2. User information encryption through BCrypt
3. Create Validations for client submitted data

*/





function App() {
  return (
    <div className="App">
      <Navagation/>
      <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        this is a test
                    </Col> 
                </Row>

            </Container>
    </div>
  );
}

export default App;
