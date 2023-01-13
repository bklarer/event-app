import { useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";
import { hostedEvents } from "../user/userSlice";
import { useNavigate } from "react-router-dom"
import Alert from 'react-bootstrap/Alert';



function HostedEvents() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const events = useSelector(hostedEvents)
    
    const firstEvent = events.length > 0 ? events[0] : null
    const toNavigate = events.length > 0 ? `/events/${firstEvent.id}` : null

    useEffect(() => {
        dispatch(pageChange("hosting"))
        navigate(toNavigate)
        }, [dispatch, toNavigate, navigate])


        const hostingError =
        <Alert variant="danger">
            <Alert.Heading>
                Oh snap! You aren't hosting any events!
            </Alert.Heading>
            <p>Create an event to use this page</p>
        </Alert>

    return (

        <div>
            {events.length > 0 ? null : hostingError}
        </div>



    )


}


export default HostedEvents