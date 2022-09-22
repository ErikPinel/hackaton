import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Diagram from "../Diagram/diagram";
import "./cardiology.css"

const Cardilogy = () => {
    const [currentDate,setCurrentDate]=useState(new Date())
    const [prevDate,setPrevDate]=useState(new Date())
    const as= new Date();
    console.log(prevDate.getHours())
  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(0);
  const [array, setArray] = useState([]);
  let arr=[1,2,6,2];
  const getCurrentAmount = () => {
    axios.get("/api-cardiology/cardiology").then((res) => {
      if (res.data) {
        setAmount(res.data.length);
        console.log(res.data.length);/////////
        setArray(res.data.map((e) => e._id));
      } else {
        console.log("error"); //////////////////////////////////////////////////
      }
    });
  };
  const postAmount = () => {
    const post = {};
    axios.post("api-cardiology/cardiology", post).then((res) => {});
  };
  const deleteCurrentAmount = () => {
    for (let i = 0; i < array.length; i++) {
      axios.delete(`/api-cardiology/cardiology/${array[i]}`);
    }
  };

  const deleteFromAmount = () => {
      axios.delete(`/api-cardiology/cardiology/${array[0]}`);
    }
    const getPrevAmount = () => {
        axios.get('api-counter/counter')
            .then((res) => {
                setPrevAmount(res.data[res.data.length-1].currentCardiology.total)

                console.log(prevAmount);
            })
    }

    const postPrevAmount = () => {
       
  const hours=new Date().getHours()
        let obj= {currentCardiology:{total:amount,time:hours}}
        console.log(obj)
    axios.post('/api-counter/counter',obj)
        .then((res) => setPrevAmount(amount))
    }


  setInterval(getCurrentAmount,500000);

  useEffect(() => {
    let a=new Date;
    console.log(a.getHours())
    getCurrentAmount();
  }, []);

  return (
    <div className="cardilogy-container">
      <button onClick={getCurrentAmount}>get</button>
      <button onClick={postAmount}>post</button>
      <button onClick={deleteFromAmount}>delete</button>
      <button onClick={getPrevAmount}>getPrevAmount</button>
      <button onClick={postPrevAmount}>postprev</button>
      <p>{amount}</p>
      <p><strong>{prevAmount}</strong></p>
      <div className='diagram-display-container'>
   { arr.map((e,index)=>(<span className='diagram-span-container' ><Diagram heigt={10} amount={arr[index]*10}></Diagram></span>) )}
   </div>
    </div>
  );
};

export default Cardilogy;
