import React, { useState, useRef } from "react";

const AddTodo = ({handleItemList}) => {
  // const [itemName, setItemName] = useState('')
  // const [itemDate, setItemDate] = useState('')

  const itemNameInput = useRef('');
  const itemNameDate = useRef('');
  
  // const handleTextItems = (e) =>{
  //   setItemName(e.target.value)
  // }
  // const handleDateItems = (e) =>{
  //   setItemDate(e.target.value)
  // }
  const handleAddButton = (e) => {
    e.preventDefault();
    handleItemList(itemNameInput.current.value, itemNameDate.current.value)
    // setItemName("")
    // setItemDate("")
  }
  
  return (
    <>
      <form className="data-add flex flex-row space-x-4 place-content-center mb-8" onSubmit={handleAddButton}>
        <input
          type="text"
          className="todo_input border-gray-300 drop-shadow-xl rounded-lg border-2 outline-none text-center"
          placeholder="Enter Todo" ref={itemNameInput} value={itemNameInput.current.value}
        ></input>
        <input
          type="date"
          className="todo_input_date border-gray-300 drop-shadow-xl rounded-lg border-2 outline-none text-center" ref={itemNameDate} value={itemNameDate.current.value}
        ></input>
        <button className="add_button mx-3 border-2 rounded-2xl px-4 py-1 font-medium bg-sky-700 shadow-xl text-white hover:bg-slate-700">
          {" "}
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
