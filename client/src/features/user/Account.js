import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { logout } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pageChange } from "../navigation/navigationSlice";
import Alert from 'react-bootstrap/Alert';

function Account() {
  const currentUser = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(pageChange("account"));
  }, [dispatch]);

  const handleDeleteClick = () => {
    fetch("/api/me", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        console.log("deleted");
        navigate("/");
        dispatch(logout());
      }
    });
  };




  return (
    <div>
      
      
    {currentUser ? (  
      <>
      <h4>User Info</h4>
      <h6>Username</h6>
      <p>{`${currentUser.username}`}</p>
      <h6>Name</h6>
      <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
      <Button onClick={handleDeleteClick} variant="danger">
        Delete
      </Button>
      </>
        ) : <Alert variant="danger">"No User Found, please login"</Alert>}
        </div>

  );
}

export default Account;
