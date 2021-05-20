import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h3>Counter</h3>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
