import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { eventRemoved, ticketAdded, ticketRemoved } from "./eventsSlice";
import { useEffect, useState } from "react";
import {
  userRemovedEvent,
  userAddedTicket,
  userRemovedTicket,
} from "../user/userSlice";

function Event() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const defaultEvent = {
    title: "Event not Found",
    description: "",
    date: "",
    address: "",
  };
  const events = useSelector((state) => state.events.entities);
  const currentUser = useSelector((state) => state.user.userInfo);
  const findEvent = events.find((event) => event.id === parseInt(eventId));
  const navigate = useNavigate();
  const [isGoing, setIsGoing] = useState(false);
  const [errors, setErrors] = useState([]);

  const addDefaultSource = (ev) => {
    ev.target.src =
      "https://media-cdn.tripadvisor.com/media/photo-s/00/18/a4/2b/watson-lake.jpg";
  };

  function deleteEvent() {
    fetch(`/api/events/${eventId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate(`/events/${events[0].id}`);
      dispatch(eventRemoved(parseInt(eventId)));
      dispatch(userRemovedEvent(parseInt(eventId)));
    });
  }

  //Ticket and going button

  const matchingTicket = currentUser
    ? currentUser.created_events.find((event) => event.id === parseInt(eventId))
    : null;

  const currentEvent = findEvent ? findEvent : defaultEvent;

  const goingButton = isGoing ? "Don't Go" : "Go";

  const userTicket = currentEvent.tickets
    ? currentEvent.tickets.find((ticket) => ticket.user_id === currentUser.id)
    : null;

  useEffect(() => {
    if (userTicket) {
      setIsGoing(true);
    } else setIsGoing(false);
  }, [userTicket]);

  const createTicketFetch = () => {
    fetch("/api/tickets", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        event_id: currentEvent.id,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((ticket) => {
          dispatch(ticketAdded(ticket));
          dispatch(userAddedTicket(currentEvent));
        });
      } else response.json().then((err) => setErrors(err.errors));
    });
  };

  const deleteTicketFetch = () => {
    fetch(`/api/tickets/${userTicket.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      dispatch(
        ticketRemoved({ eventId: currentEvent.id, ticketId: userTicket.id })
      );
      dispatch(userRemovedTicket(currentEvent.id));
    });
  };

  const handleGoingClick = () => {
    isGoing ? deleteTicketFetch() : createTicketFetch();
  };

  const goingButtonStyle = isGoing ? "secondary" : "success";

  //time formatting
  const formattedDate = currentEvent.date.slice(0, 10);
  const month = formattedDate.slice(5, 7);
  const day = formattedDate.slice(8, 10);
  const year = formattedDate.slice(0, 4);
  const eventDate = `${month}-${day}-${year}`;

  const formattedTime = currentEvent.date.slice(11, 16);
  const hour = formattedTime.slice(0, 2);
  const minute = formattedTime.slice(3, 5);

  const eventTime =
    parseInt(hour) > 12 ? `${hour - 12}:${minute} pm` : `${hour}:${minute}am`;

  return (
    <Container className="justify-content-md-center">
      <Image
        width={360}
        className="fluid"
        src={currentEvent.img_url}
        onError={addDefaultSource}
        alt={"Event"}
      />

      <h1>{currentEvent.title}</h1>
      {currentEvent.tickets ? (
        <>
          <p>{"Date: " + eventDate}</p>
          <p>{"Time: " + eventTime}</p>
          <p>{currentEvent.description}</p>
          <h4>Address</h4>
          <p>{currentEvent.address}</p>
          <p>
            {currentEvent.city +
              ", " +
              currentEvent.state +
              " " +
              currentEvent.zip}
          </p>
          <h5>
            People Attending:{" "}
            {currentEvent.tickets ? currentEvent.tickets.length : null}
          </h5>
          <Button
            variant={goingButtonStyle}
            onClick={handleGoingClick}
            style={{ margin: "10px" }}
          >
            {goingButton}
          </Button>
        </>
      ) : null}

      {matchingTicket ? (
        <>
          <Link to={`/events/${currentEvent.id}/edit`}>
            <Button variant="warning" style={{ margin: "10px" }}>
              Edit
            </Button>
          </Link>
          <Button
            variant="danger"
            onClick={deleteEvent}
            style={{ margin: "10px" }}
          >
            Delete
          </Button>
        </>
      ) : null}
      {errors.map((err) => (
        <Alert variant="danger" key={err}>
          {err}
        </Alert>
      ))}
    </Container>
  );
}

export default Event;
