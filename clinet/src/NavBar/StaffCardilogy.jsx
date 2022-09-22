import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Diagram from "../Diagram/diagram";
import "./staff-cardio.css";

const StaffCardilogy = () => {
  const [data, setdata] = useState([]);
  const [prevDate, setPrevDate] = useState(new Date());
  const as = new Date();
  console.log(prevDate.getHours());
  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(0);
  const [array, setArray] = useState([]);
  const [newarr, setnewArr] = useState([]);
  const arrHours = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"]
  let arr = [1, 2, 6, 2];
  const getCurrentAmount = () => {
    axios.get("/api-cardiology/cardiology").then((res) => {
      if (res.data) {
        setAmount(res.data.length);
        console.log(res.data.length);
        let a = []; /////////
        res.data.map((e) => a.push(e._id));

        setArray(a);
        console.log(a); ////////////
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
      if (arr[i]) axios.delete(`/api-cardiology/cardiology/${array[i]}`);
    }
  };

  const deleteFromPrev = () => {
    console.log(newarr[0]);
    data.map((e, index) =>
      axios.delete(`/api-counter/counter/${data[index]._id}`)
    );
  };

  const deleteFromAmount = () => {
    axios.delete(`/api-cardiology/cardiology/${array[0]}`);
  };
  const getPrevAmount = () => {
    axios.get("api-counter/counter").then((res) => {
      setdata(res.data);
      let a = [];
      /////////

      res.data.map((e, i) => a.push(res.data[i].currentCardiology.total));
      console.log(a);
      setnewArr(a);
      setPrevAmount(res.data[res.data.length - 1].currentCardiology.total);

      console.log(prevAmount);
    });
  };

  const postPrevAmount = () => {
    const hours = new Date().getHours();
    let obj = { currentCardiology: { total: amount, time: hours } };
    console.log(obj);
    axios
      .post("/api-counter/counter", obj)
      .then((res) => setPrevAmount(amount));
  };

  setInterval(getCurrentAmount, 500000);

  useEffect(() => {
    let a = new Date();
    if (a.getHours() >= 9 && a.getHours() <= 21) {
      if (a.getMinutes() === 59) {
        postPrevAmount();
        getPrevAmount();
      }
      if (a.getHours() === 22) {
        deleteFromPrev();
      }
    }
    getCurrentAmount();
    getPrevAmount();
  }, []);

  return (
    <div className="cardilogy-container1">
      <button className="staff-btn" onClick={getCurrentAmount}>get</button>
      <button className="staff-btn"  onClick={postAmount}>post</button>
      <button className="staff-btn"  onClick={deleteFromAmount}>delete</button>
      <button className="staff-btn"  onClick={getPrevAmount}>getPrevAmount</button>
      <button className="staff-btn"  onClick={postPrevAmount}>postprev</button>
      <button className="staff-btn"  onClick={deleteFromPrev}> del prev</button>
      <div className="diagram-display-container">
        {newarr.map((e, index) => (
          <p className="diagram-span-container">
            <Diagram heigt={2} amount={newarr[index]}></Diagram>
            {arrHours[index]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StaffCardilogy;