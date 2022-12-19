import {Container, Row, Col} from "react-bootstrap";
import Side from "./Side"


function Sidebar () {





    return (

        <Container fluid>
        <Row>
            <Col xs={2} id="sidebar-wrapper">      
              <Side />
            </Col>
            <Col  xs={10} id="page-content-wrapper">
                Event with Title, description, date, address, how many people are going, etc...
                Going button, edit button (only allows if creator is logged in), delete button (creator only)
            </Col> 
        </Row>

    </Container>



    )


}


export default Sidebar