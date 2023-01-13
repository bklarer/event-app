import { useEffect } from "react" 
import { useDispatch } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";


function AttendingEvents() {
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(pageChange("attending"))
        }, [dispatch])



// Events needs to have a side bar, that will have a route
    return (


        <div>
            <p>Events Attending</p>
        </div>



    )




}



export default AttendingEvents