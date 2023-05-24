import React from "react";
import TaskItem from "./TaskItem";

function Tasklist({
  tasks,
  showImcomplete,
  handleSetStatus,
  removeTask,
  setShowImcomplete,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showImcomplete ? task.status !== true : true))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleSetStatus={handleSetStatus}
              removeTask={removeTask}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          shows incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showImcomplete}
          onClick={(e) => setShowImcomplete(e.target.checked)}
        ></input>
      </div>
    </>
  );
}

export default Tasklist;
