import Nav from "react-bootstrap/Nav";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../events/eventsSlice"
import {LinkContainer} from "react-router-bootstrap";
//Will need to change links to Nav from react router dom


function Sidebar() {

    const events = useSelector((state) => state.events.entities)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])


    const loadEvents = 
            events.map((event) => {
                return (
                    <Nav.Item key={event.id}>
                        <LinkContainer to={`/events/${event.id}`}>
                            <Nav.Link>{event.title}</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                )
            })


    return (

        <Nav className="col-md-12 d-none d-md-block bg-light"
        activeKey="/home"
        variant="pills"
        >
            {loadEvents}

        </Nav>



    )



}


export default Sidebar