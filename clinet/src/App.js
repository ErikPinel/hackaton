import { Route, Routes } from 'react-router';
import './App.css';
import Cardilogy from './Departments/Cardilogy';
import Haematology from './Departments/Haematology';
import Navbar from './NavBar/Navbar';
import Oncology from './Departments/Oncology';
import HomePage from './Home/home';
import Staff from './NavBar/Staff';

//
function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      {/* <Route path="/haematology" element={<Haematology/>}/> */}
      {/* <Route path="/oncology" element={<Oncology/>}/> */}
      <Route path="/cardiology" element={<Cardilogy/>}/>
      <Route path="/staff" element={<Staff/>}/>
    </Routes>
    </div>
  );
}

export default App;
