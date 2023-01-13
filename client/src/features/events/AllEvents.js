import { useEffect } from "react" 
import { useDispatch, useSelector } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";
import { futureEvents } from "./eventsSlice";
import { useNavigate } from "react-router-dom"

function AllEvents() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const events = useSelector(futureEvents)

    const firstEvent = events.length > 0 ? events[0] : null

    const toNavigate = events.length > 0 ? `/events/${firstEvent.id}` : null



    useEffect(() => {
        dispatch(pageChange("all"))
        navigate(toNavigate)
        }, [dispatch, toNavigate, navigate])


    return (


        <div>
            <p>All Events</p>
        </div>



    )




}



export default AllEvents