import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-btns-container">
        <NavLink className="nav-btn" to="/home"><strong>Home</strong></NavLink>
        <NavLink className="nav-btn" to="/haematology"><strong>Haematology</strong></NavLink>
        <NavLink className="nav-btn" to="/oncology"><strong>Oncology</strong></NavLink>
        <NavLink className="nav-btn" to="/cardiology"><strong>Cardiology</strong></NavLink>
        <NavLink className="nav-btn" to="/login"><strong>Login</strong></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
