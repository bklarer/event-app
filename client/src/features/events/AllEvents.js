import { useEffect } from "react" 
import { useDispatch } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";

function AllEvents() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(pageChange("all"))
        }, [dispatch])


    return (


        <div>
            <p>All Events</p>
        </div>



    )




}



export default AllEvents