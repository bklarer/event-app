import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { logout } from "./userSlice"
import { useNavigate } from 'react-router-dom';


function Account () {
    const {first_name, last_name, username} = useSelector((state) => state.user.userInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const handleDeleteClick = () => {
        fetch("/api/me", {
            method: "DELETE"
        })
        .then((r) => {
            if(r.ok) {
                console.log("deleted")
                navigate("/")
                dispatch(logout())
            }
        })
    }



    return (


        <div>
            <h4>User Info</h4>
            <h6>Username</h6>
            <p>{`${username}`}</p>
            <h6>Name</h6>
            <p>{`${first_name} ${last_name}`}</p>
            <Button onClick={handleDeleteClick} variant="danger">Delete</Button>


        </div>



    )

}


export default Account