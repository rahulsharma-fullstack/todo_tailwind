import React from "react";

const TodoList = () => {
  return (
    <div className="my-5">
      <ol>
        <li className="grid grid-cols-3 justify-items-center my-4">
          <p>gym</p> <p>21/09/2013</p>
          <button>X</button>
        </li>
        <li className="grid grid-cols-3 justify-items-center">
          <p>gymcvbcv</p> <p>21/09/2013</p>
          <button>X</button>
        </li>
      </ol>
    </div>
  );
};

export default TodoList;
