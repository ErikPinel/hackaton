import { selectOpen } from "../Redux/loginReducer";
import { useSelector } from "react-redux";

const Login = () => {
    // const dispatch = useDispatch();
    const isOpen = useSelector(selectOpen);
    return(
        <div className="login-container">
            {isOpen ? <h1>abc</h1> : null}
        </div>
    )
}

export default Login