import { useState } from "react";
import List from "./list";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputHanlder = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <List inputTask={tasks} />
      <label htmlFor="taskInput">Task:</label>
      <input onChange={inputHanlder}></input>
      <button
        className="addButton"
        onClick={() => {
          setTasks([...tasks, input]);
        }}
      >
        Add
      </button>
    </>
  );
}
