import { useEffect } from "react" 
import { useDispatch, useSelector } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";
import { eventsAttending } from "../user/userSlice";
import { useNavigate } from "react-router-dom"

function AttendingEvents() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const events = useSelector(eventsAttending)


    const firstEvent = events.length > 0 ? events[0] : null



    const toNavigate = events.length > 0 ? `/events/${firstEvent.id}` : null
    
    
    useEffect(() => {
        dispatch(pageChange("attending"))
        navigate(toNavigate)
        }, [dispatch, toNavigate, navigate])






// Events needs to have a side bar, that will have a route
    return (


        <div>
            <p>Events Attending</p>
        </div>



    )




}



export default AttendingEvents