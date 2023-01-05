import Nav from "react-bootstrap/Nav";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../events/eventsSlice"
//Will need to change links to Nav from react router dom


function Sidebar() {

    const events = useSelector((state) => state.events.entities)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])

    // function loadEvents() {

    //     return (
    //         events.map((event) => {
    //             return (
    //                 <Nav.Item>
    //                     <Nav.Link href={`/events/${event.id}`}>{event.title}</Nav.Link>
    //                 </Nav.Item>
    //             )
    //         })
    //     )
    // }

    const loadEvents = 
            events.map((event) => {
                return (
                    <Nav.Item key={event.id}>
                        <Nav.Link href={`/events/${event.id}`}>{event.title}</Nav.Link>
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