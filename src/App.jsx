import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Heading from "./components/Heading";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
// import './index.css'

function App() {
  const [items, setItems] = useState([{ name: "gym", date: "02/03/2023" }]);

  const handleItemList = (newItemName, newItemDate) => {
    console.log(`name: ${newItemName}, date: ${newItemDate}`)
    let newItems = [...items, { name: newItemName, date: newItemDate }];
    setItems(newItems);
    // console.log(newItems);
    
  };

  const handleDeleteButton = (key) => {
    // let deleteItem = items.filter()
  }

  return (
    <>
      <div className="container w-full place-content-center  m-4 p-3 bg-sky-200 rounded-3xl ">
        <Heading />
        <AddTodo handleItemList={handleItemList} />
        <TodoList items={items} handleDeleteButton={handleDeleteButton}/>
      </div>
    </>
  );
}

export default App;
