import './App.css';
import NavagationBar from './features/navigation/NavigationBar';
import Layout from './features/navigation/Layout';
import Loading from "./features/navigation/Loading"
import { useSelector, useDispatch } from "react-redux";
import { checkLogin } from "./features/user/userActions"
import { useEffect } from 'react';





function App() {
  const { loading, userInfo } = useSelector((state) => state.user)
  const eventLoading = useSelector((state) => state.events.loading)
  const dispatch = useDispatch()
  
  useEffect(() => dispatch(checkLogin()), [dispatch])
  

  return (
    <div className="App">
      {loading || eventLoading ? (
        <Loading/>
      ) : (        
      <>
        <NavagationBar/>
        <Layout/>
      </>
      )}

      
    </div>
  );
}

export default App;
