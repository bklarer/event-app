import '../App.css';
import NavagationBar from './navigation/NavigationBar';
import Layout from './navigation/Layout';

/*

Frontend

sidebar through bootstrap?

Components
  1. Signup Form
  2. Login
  3. Events (create filter for My Events)
        - Sidebar
        - Event - map out
        - Single Event Page
  4. Create Event


  Create Redux dependancies and state

  Should I have 2 navigation components?

Backend
1. Create Models, Controllers, Serializers, Routes
2. User information encryption through BCrypt
3. Create Validations for client submitted data

*/





function App() {
  return (
    <div className="App">
      <NavagationBar/>
      <Layout/>
    </div>
  );
}

export default App;
