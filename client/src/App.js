import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route index element={<Profile/>} />


      </Routes>
    </Router>
  );
}

export default App;
