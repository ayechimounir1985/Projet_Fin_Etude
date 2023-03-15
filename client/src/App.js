import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import AddRapport from './Pages/AddRapport';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import RapportLists from './Pages/RapportLists';
import Register from './Pages/Register';
import { PrivateRoute } from './PrivateRoutes/PrivateRoute';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route index element={<Register/>} />
        <Route path='/Add Rapport' element={<AddRapport/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profile' element={<PrivateRoute>  <Profile/></PrivateRoute>} />
        <Route path='/Rapport' element={<RapportLists/>} />

      </Routes>
    </Router>
  );
}

export default App;
