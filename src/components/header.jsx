import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header className="nav">
        <div className="container">
          <Link className="headerLink" to={"/"}>
            Home
          </Link>
          <Link className="headerLink" to={"/counter"}>
            Counter
          </Link>
          <Link className="headerLink" to={"/todoList"}>
            TODOList
          </Link>
          <Link className="headerLink" to={"/ticTacToe"}>
            TicTacToe
          </Link>
        </div>
      </header>
    </>
  );
}
