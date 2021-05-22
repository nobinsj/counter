import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="NavBar">
        <h2 className="Net">COUNTER</h2>
      </div>
      <div className="Body">
        <h3 className="Head">COUNTER</h3>
        <h1 className="Count">{count}</h1>
        <div className="BtnGrp">
        <button className ="Button" onClick={() => setCount(count + 1)}>+</button>{" "}
        <button className="Button" onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
