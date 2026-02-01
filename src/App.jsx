import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./components/counter";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import TodoList from "./components/TodoList";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todoList" element={<TodoList />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
