import { useEffect } from "react";

export default function List(props) {
  useEffect(() => {
    console.log(props.inputTask);
  }, [props]);
  return (
    <>
      <div className="list">
        <ol>
          {props.inputTask.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
