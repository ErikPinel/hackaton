import axios from "axios";
import { notLogged, selectLog } from "../Redux/loginReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logged } from "../Redux/loginReducer";
import { useEffect } from "react";
import "./login.css"

const Login = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectLog);

  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState(0);

  const logOut = () => {
    dispatch(notLogged());
    postLogout();
    getLogged();
  }

  const getUsers = () => {
    axios.get("/api-users/users").then((res) => {
        let check1 = res.data[res.data.length-1].userName === userNameValue
        let check2 =res.data[res.data.length-1].password === passwordValue
      if (check1 && check2) {
        dispatch(logged());
        postLogged()
      } else {
        console.log("incorrect");
      }
    });
  };
  const getLogged = () => {
    axios.get('/api-logged/logged')
        .then((res) => {
            console.log(res.data[res.data.length-1].logged);
            res.data[res.data.length-1].logged ? dispatch(logged()) : console.log('no');
        })
  }
  const postLogged = () => {
    axios.post('/api-logged/logged', {logged : true})
        .then((res) => {
        })
  }
  const postLogout = () => {
    axios.post('/api-logged/logged', {logged : false})
        .then((res) => {
        })
  }
  useEffect(() => {
    getLogged()
  }, []);
  return (
    <div className="login-container">
      <input
        placeholder="enterusername..."
        onChange={(e) => setUserNameValue(e.target.value)}
      ></input>
      <input
        placeholder="enterpasswword..."
        onChange={(e) => setPasswordValue(e.target.value)}
      ></input>
      <button onClick={getUsers}>Log In</button>
      {isOpen ? 
      <button onClick={logOut}>Log Out</button> :
       <h1>Not Logged</h1>}
    </div>
  );
};
export default Login;
