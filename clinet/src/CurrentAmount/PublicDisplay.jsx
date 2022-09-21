import { useEffect, useState } from "react";
import axios from "axios";

function PublicDisplay() {
  const [amount, setAmount] = useState("");
  const [userDate, setDate] = useState(new Date);
  const [data, setData] = useState([]);


  useEffect(() => {
    getCurrentAmount();
  }, []);

  function deleteList(index, id) {
    let templi = [...data];
    templi.splice(index, 1);
    setData(templi);
    axios.delete(`api/users/${id}`);
  }

  /// login

  const getCurrentAmount = () => {
    axios.get("/api/currentamount").then((res) => {
      if (res.data) {
        const tempData = res.data;
        let parseArr = [];
        let tempobj = {};
        let mahlakaObj={};
        let mahlakaArr=[];
        tempData.map((element, index) => {
          element.mahlaka.map((e,i)=> {   })
          tempobj = {
            mahlaka : element.mahlaka,
            time: element.time,
            id: element._id,
          };
          parseArr.push(tempobj);
        });
        console.log(res.data);
        const a = res.data;
        res.data.map((a) => {
          console.log(a.userName);
        });
        setData(parseArr);
      }
    });
  };

  const postUsers = () => {
    const users = { userName: userName, password: password };
    axios.post("api/users", users).then((res) => {});
  };

  function login() {
    const userexist = data.some(
      (e, index) => e.userName == userName && e.password == password
    );

    if (userexist) {
      alert("logged");
    } else alert(" userName or password dose not exist");
  }

  function reg() {
    const userexist = data.some((e, index) => e.userName == userName);
    if (!userexist) {
      postUsers();
    } else alert("user userName alredy in use");
  }




  return (
    <div classuserName="App">
      <h1>login</h1>
      <form action="">
        <input
          type="text"
          placeholder="user userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="paswword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}> submit</button>
      </form>
      <h1>reg</h1>
      <form action="">
        <input
          type="text"
          min={8}
          placeholder="user userName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          min={8}
          placeholder="paswword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={reg}> submit</button>
      </form>

      <ul>
        {data.map((element, index) => (
          <li>
            {element.userName + "-" + element.password}{" "}
            <button onClick={() => deleteList(index, element.id)}>
              {" "}
              delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicDisplay;
