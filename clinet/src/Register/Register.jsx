import axios from "axios"
import { useState } from "react"

const Register = () => {
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const registerPost = () => {
        axios.post('./api-users/users',{userName:username,password: password})
            // .then()
    }
    return (
        <div className="register-container">
            <input placeholder="Enter Username..." onChange={(e) => setUserName(e.target.value)}></input>
            <input placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={registerPost}>Add</button>
        </div>
    )
}
export default Register