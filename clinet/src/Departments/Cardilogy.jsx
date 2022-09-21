import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const  Cardilogy = () => {
    const [amount,setAmount] = useState(0)
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
            
        </div>
    )
}

export default Cardilogy