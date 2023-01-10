import './App.css';
import NavagationBar from './features/navigation/NavigationBar';
import Layout from './features/navigation/Layout';
import Loading from "./features/navigation/Loading"
import { useSelector } from "react-redux";





function App() {
  const { loading } = useSelector((state) => state.user)
  const showLoading = loading? <Loading/> : null


  return (
    <div className="App">
      {loading ? (
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
