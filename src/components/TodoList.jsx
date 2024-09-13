import React from "react";

const TodoList = ({items, handleDeleteButton}) => {

  

  
  return (
    <div className="my-5">
      <ol>
          {items.map((value, key) => (

        <li key={key} className="grid grid-cols-3 justify-items-center my-4">
          <p>{value.name}</p> <p>{value.date}</p>
          <button className="dlt bg-red-600 px-4 text-white rounded-3xl" onClick={()=> handleDeleteButton(value.name)}>X</button>
        </li>
          ))}
        
      </ol>
    </div>
  );
};

export default TodoList;
