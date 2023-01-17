import Login from "../user/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const { userInfo } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const toNavigate = userInfo ? "/events" : null


    useEffect(() => {
        navigate(toNavigate)


    }, [toNavigate, navigate])


  return <div>{!userInfo ? <Login /> : null}</div>;
}



export default Home;
