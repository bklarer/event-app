import Login from "../user/Login";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {

    const { userInfo } = useSelector((state) => state.user);
    const events = useSelector((state) => state.entities)

  return <div>{!userInfo ? <Login /> : null}</div>;
}



export default Home;
