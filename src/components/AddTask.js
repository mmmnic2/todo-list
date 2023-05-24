import React from "react";

function AddTask({ handleNewTask, newTasks, handleInputChange }) {
  return (
    <form action="#" className="form" onSubmit={handleNewTask}>
      <label htmlFor="newItem">Add to the Todo list</label>
      <input
        type="type"
        id="newItem"
        value={newTasks}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTask;
