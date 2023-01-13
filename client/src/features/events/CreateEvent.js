import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventAdded } from "./eventsSlice";
import { pageChange } from "../navigation/navigationSlice";

function CreateEvent() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(pageChange(null));
  }, [dispatch]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    img_url: "",
    date: "",
    time: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const formattedEvent = {
    title: newEvent.title,
    description: newEvent.description,
    img_url: newEvent.img_url,
    date: newEvent.date + "T" + newEvent.time + ":00",
    address: newEvent.address,
    city: newEvent.city,
    state: newEvent.state,
    zip: newEvent.zip,
    creator_id: id,
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setNewEvent((newEvent) => ({ ...newEvent, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formattedEvent),
    })
      .then((resp) => resp.json())
      .then((event) => {
        dispatch(eventAdded(event));
        setNewEvent({
          title: "",
          description: "",
          img_url: "",
          date: "",
          time: "",
          address: "",
          city: "",
          state: "",
          zip: "",
        });
      });
  }

  let date = new Date().toISOString().slice(0, 10);

  return (
    <div>
      <h1>Create New Event</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Event Title"
            name="title"
            onChange={handleChange}
            value={newEvent.title}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={newEvent.description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image URL"
            name="img_url"
            onChange={handleChange}
            value={newEvent.img_url}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            onChange={handleChange}
            value={newEvent.date}
            min={date}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="time"
            onChange={handleChange}
            value={newEvent.time}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={newEvent.address}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
            value={newEvent.city}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
            name="state"
            onChange={handleChange}
            value={newEvent.state}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip"
            name="zip"
            onChange={handleChange}
            value={newEvent.zip}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateEvent;
