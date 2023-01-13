import { useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";
import { hostedEvents } from "../user/userSlice";
import { useNavigate } from "react-router-dom"



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


    return (

        <div>
            <p>Hosted Events</p>
        </div>



    )


}


export default HostedEvents