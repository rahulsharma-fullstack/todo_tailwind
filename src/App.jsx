import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// import './index.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container w-full place-content-center  m-4 p-3 bg-sky-200 rounded-3xl ">
        <Heading />
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
