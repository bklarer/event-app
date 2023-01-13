import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";
import { eventsAttending } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function AttendingEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector(eventsAttending);

  const firstEvent = events.length > 0 ? events[0] : null;

  const toNavigate = events.length > 0 ? `/events/${firstEvent.id}` : null;

  useEffect(() => {
    dispatch(pageChange("attending"));
    navigate(toNavigate);
  }, [dispatch, toNavigate, navigate]);

  const attendingError = (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You aren't attending any events!</Alert.Heading>
      <p>Go to the events page and choose an event to attend</p>
    </Alert>
  );

  return <div>{events.length > 0 ? null : attendingError}</div>;
}

export default AttendingEvents;
