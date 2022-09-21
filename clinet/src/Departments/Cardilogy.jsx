import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Cardilogy = () => {
  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(0);
  const [array, setArray] = useState([]);
  const getCurrentAmount = () => {
    axios.get("/api-cardiology/cardiology").then((res) => {
      if (res.data) {
        setAmount(res.data.length);
        console.log(res.data.length);/////////
        setArray(res.data.map((e) => e._id));
        console.log(array);////////////
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
                setPrevAmount(res.data.length)
                console.log(prevAmount);
            })
    }

    const postPrevAmount = () => {
    axios.post('/api-cardiology/cardiology', amount)
        .then((res) => setPrevAmount(amount))
    }


  setInterval(getCurrentAmount, 500000);
  setInterval(deleteCurrentAmount, 500000);
  setInterval(deleteCurrentAmount, 500000);
  useEffect(() => {
    getCurrentAmount();
  }, []);

  return (
    <div className="cardilogy-container">
      <button onClick={getCurrentAmount}>get</button>
      <button onClick={postAmount}>post</button>
      <button onClick={deleteFromAmount}>delete</button>
      <button onClick={getPrevAmount}>getPrevAmount</button>
      <p>{amount}</p>
      <p><strong>{prevAmount}</strong></p>
    </div>
  );
};

export default Cardilogy;
