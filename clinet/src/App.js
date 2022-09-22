import { Route, Routes } from 'react-router';
import './App.css';
import Cardilogy from './Departments/Cardilogy';
import Haematology from './Departments/Haematology';
import Navbar from './NavBar/Navbar';
import Oncology from './Departments/Oncology';
import HomePage from './Home/home';
import Login from './Login/Login';
import Register from './Register/Register';

//
function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/haematology" element={<Haematology/>}/>
      <Route path="/oncology" element={<Oncology/>}/>
      <Route path="/cardiology" element={<Cardilogy/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
