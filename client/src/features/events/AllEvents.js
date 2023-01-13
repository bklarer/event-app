import { useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";

function AllEvents() {
    const dispatch = useDispatch()
    const { page } = useSelector(state => state.navigation)


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