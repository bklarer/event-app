import { useEffect } from "react" 
import { useSelector, useDispatch } from "react-redux";
import { pageChange } from "../navigation/navigationSlice";




function HostedEvents() {
    const dispatch = useDispatch()
    const { page } = useSelector(state => state.navigation)
    


    useEffect(() => {
        dispatch(pageChange("hosting"))
        }, [dispatch])


    return (

        <div>
            <p>Hosted Events</p>
        </div>



    )


}


export default HostedEvents