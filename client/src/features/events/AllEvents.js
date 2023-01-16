import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";
import { futureEvents } from "./eventsSlice";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function AllEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector(futureEvents);
  const currentUser = useSelector((state) => state.user.userInfo)

    console.log("events", events)

  const firstEvent = events.length > 0 && currentUser ? events[0] : null;

  const toNavigate = events.length > 0 && currentUser ? `/events/${firstEvent.id}` : null;

  useEffect(() => {
    dispatch(pageChange("all"));
    navigate(toNavigate);
  }, [dispatch, toNavigate, navigate]);

  const eventsError = (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! There aren't any events</Alert.Heading>
      <p>Create an event to start using the app</p>
    </Alert>
  );

  return <div>{events.length > 0 ? null : eventsError}</div>;
}

export default AllEvents;
