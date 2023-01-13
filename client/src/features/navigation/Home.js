import Login from "../user/Login";
import { useSelector } from "react-redux";

function Home() {
  const { userInfo } = useSelector((state) => state.user);

  return <div>{!userInfo ? <Login /> : null}</div>;
}

export default Home;
