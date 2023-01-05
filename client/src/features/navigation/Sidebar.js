import Nav from "react-bootstrap/Nav";

//Will need to change links to Nav from react router dom


function Sidebar() {

    const events = []


    function loadEvents() {

        return (
            events.map((event) => {
                return (
                    <Nav.Item>
                        <Nav.Link href={`/events/${event.id}`}>{event.title}</Nav.Link>
                    </Nav.Item>
                )

            })

        )


    }


    return (

        <Nav className="col-md-12 d-none d-md-block bg-light"
        activeKey="/home"
        variant="pills"
        >
        <Nav.Item >
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>

        </Nav>



    )



}


export default Sidebar