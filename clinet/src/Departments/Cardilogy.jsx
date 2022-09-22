import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Diagram from "../Diagram/diagram";
import "./cardiology.css"


const Cardilogy = () => {
    const [data,setdata]=useState([])
    const [prevDate,setPrevDate]=useState(new Date())
    const as= new Date();
    console.log(prevDate.getHours())
  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(0);
  const [array, setArray] = useState([]);
  const[newarr,setnewArr]=useState([])
  const [id,setId]=useState([]);
  let arr=[1,2,6,2];
  const getCurrentAmount = () => {
    axios.get("/api-cardiology/cardiology").then((res) => {
      if (res.data) {
        setAmount(res.data.length);
        console.log(res.data.length);
        let a=[]/////////
        res.data.map((e) => a.push(e._id))
        
        setArray(a);
        console.log(a);////////////
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
        if(arr[i])
      axios.delete(`/api-cardiology/cardiology/${array[i]}`);
    }
  };

  const deleteFromPrev = () => 
  {
    console.log(newarr[0])
    data.map((e,index)=>(axios.delete(`/api-counter/counter/${data[index]._id}`)))
       
        
  }



  const deleteFromAmount = () => {
      axios.delete(`/api-cardiology/cardiology/${array[0]}`);
    }
    const getPrevAmount = () => {
        axios.get('api-counter/counter')
            .then((res) => {
                setdata(res.data);
                let a =[];
               /////////
               

                (res.data).map((e,i)=>(a.push(res.data[i].currentCardiology.total)))
               console.log(a)
                setnewArr(a);
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
    let a=new Date();
    if(a.getMinutes() === 59) {
      getPrevAmount()
    }
    getCurrentAmount()
  }, []);

  return (
    <div className="cardilogy-container">
      <button onClick={getCurrentAmount}>get</button>
      <button onClick={postAmount}>post</button>
      <button onClick={deleteFromAmount}>delete</button>
      <button onClick={getPrevAmount}>getPrevAmount</button>
      <button onClick={postPrevAmount}>postprev</button>
      <button onClick={deleteFromPrev}> del prev</button>
      <p>{amount}</p>
      <p><strong>{prevAmount}</strong></p>
      <div className='diagram-display-container'>
   {newarr.map((e,index)=>(<span className='diagram-span-container' ><Diagram heigt={2} amount={newarr[index]}></Diagram>{newarr[index]}</span>) )}
   </div>
    </div>
  );
};

export default Cardilogy;