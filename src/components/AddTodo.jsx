import React, { useState } from "react";

const AddTodo = ({handleItemList}) => {
  const [itemName, setItemName] = useState()
  const [itemDate, setItemDate] = useState()

  
  const handleTextItems = (e) =>{
    setItemName(e.target.value)
  }
  const handleDateItems = (e) =>{
    setItemDate(e.target.value)
  }
  const handleAddButton = () => {

    handleItemList(itemName, itemDate)
    setItemName("")
    setItemDate("")
  }
  
  return (
    <>
      <div className="data-add flex flex-row space-x-4 place-content-center mb-8">
        <input
          type="text"
          className="todo_input border-gray-300 drop-shadow-xl rounded-lg border-2 outline-none text-center"
          placeholder="Enter Todo" onChange={handleTextItems} value={itemName}
        ></input>
        <input
          type="date"
          className="todo_input_date border-gray-300 drop-shadow-xl rounded-lg border-2 outline-none text-center" onChange={handleDateItems} value={itemDate}
        ></input>
        <button className="add_button mx-3 border-2 rounded-2xl px-4 py-1 font-medium bg-sky-700 shadow-xl text-white hover:bg-slate-700" onClick={handleAddButton}>
          {" "}
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
