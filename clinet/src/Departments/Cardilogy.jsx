import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import Diagram from "../diagram/diagram"
import "./cardilogy.css"

const  Cardilogy = () => {
    const [amount,setAmount] = useState(0)
    let arr=[1,2,6,2];
    const getCurrentAmount = () => {
        axios.get('/api-cardiology/cardiology')
            .then((res) => {
                res.data ?
                setAmount(res.data.length) : 
                console.log("error");
            })
    }
    const deleteCurrentAmount = (id) => {
        axios.delete(`/api-cardiology/cardiology/${id}`)
            .then((res) => {
                res.data ?
                setAmount(res.data.length) : 
                console.log("error");
            })
    }
    setInterval(getCurrentAmount,500000);
    setInterval(deleteCurrentAmount,500000*12);
    useEffect(() => {
        getCurrentAmount();
      }, []);
    
    return(
        <div className="cardilogy-container">
            <button onClick={getCurrentAmount}>get</button>
            <p>{amount}</p>
             <div className='diagram-display-container'>
   { arr.map((e,index)=>(<span className='diagram-span-container' ><Diagram heigt={10} amount={arr[index]*10}></Diagram></span>) )}
   </div>
        </div>
    )
}

export default Cardilogy