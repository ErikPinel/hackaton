import "./diagram.css"
function Diagram (props) {
    return (
      <span className="Diagram-container">
        {console.log(props.amount)}
        <div  style={{height:(props.amount)*5}} className="coulmn-container">{props.amount}</div>
        
      </span>

    );
  };
  
  export default Diagram;