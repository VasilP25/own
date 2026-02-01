import { useState } from "react";

export default function ProgressBar() {
  const [percentage, SetPercentage] = useState("");

  const inputHandler = (e) => {
    // SetPercentage(`${(e.target.value / 100) * 300}px`);
    SetPercentage(e.target.value);
  };
  return (
    <>
      <div className="bars">
        <div className="grayClass both"></div>
        <div
          className="colorfulClass both"
          style={{ width: `${(percentage / 100) * 300}px` }}
        >
          {percentage <= 100 ? `${percentage}%` : `100%`}
        </div>
      </div>
      <form>
        <label htmlFor="fillnumber">Percentage input:</label>
        <input type="number" name="fillnumber" onChange={inputHandler}></input>
      </form>
    </>
  );
}
