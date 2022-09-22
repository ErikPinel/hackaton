import Login from "../Login/Login";
import { selectLog } from "../Redux/loginReducer";
import { useSelector } from "react-redux";
import Cardilogy from "../Departments/Cardilogy";
import "./staff.css";
import StaffCardilogy from "./StaffCardilogy";

const Staff = () => {
  const isOpen = useSelector(selectLog);

  return (
    <div className="staff-container">
      <div className="login-container">
        <Login></Login>
      </div>
      {isOpen ? (
        <div className="inner-container">
          <StaffCardilogy></StaffCardilogy>
        </div>
      ) : <div className="not-allowed">Not Allowed!</div>}
    </div>
  );
};
export default Staff;
