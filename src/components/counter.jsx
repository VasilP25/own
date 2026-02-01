import { useState } from "react";

export default function Counter() {
  let [num, setNum] = useState(0);
  return (
    <>
      <h1>Counter</h1>

      {num % 2 === 0 ? <p>The number is even</p> : <p>The number is odd</p>}
      <div className="counter">
        <button onClick={() => setNum(num - 1)}>Decrease</button>
        <span>{num}</span>
        <button onClick={() => setNum(num + 1)}>Increase</button>
      </div>
    </>
  );
}
