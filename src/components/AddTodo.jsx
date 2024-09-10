import React from "react";

const AddTodo = () => {
  return (
    <>
      <div className="data-add flex flex-row space-x-4 place-content-center mb-8">
        <input type="text" className="todo_input border-gray-300 drop-shadow-xl rounded-lg border-2 outline-none text-center" placeholder="Enter Todo"></input>
        <input type="date" className="todo_input_date border-gray-300 drop-shadow-xl rounded-lg border-2 outline-none text-center"></input>
        <button className="add_button mx-3 border-2 rounded-2xl px-4 py-1 font-medium bg-sky-700 shadow-xl text-white hover:bg-slate-700"> Add</button>
      </div>
    </>
  );
};

export default AddTodo;
