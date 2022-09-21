import { Route, Routes } from 'react-router';
import './App.css';
import Cardilogy from './Departments/Cardilogy';
import Haematology from './Departments/Haematology';
import LOGIN from './LogRegComponent/Logins';
import Navbar from './NavBar/Navbar';
import Oncology from './Departments/Oncology';
import LoginModal from './Login/LoginModal';
import Diagram from './diagram/diagram';



//
function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
  
    
    <Routes>
      {/* <Route path="/home" element={<Home/>}/> */}
      <Route path="/haematology" element={<Haematology/>}/>
      <Route path="/oncology" element={<Oncology/>}/>
      <Route path="/cardiology" element={<Cardilogy/>}/>
      <Route path="/login" element={<LoginModal/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
