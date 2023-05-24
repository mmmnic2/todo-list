import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasklist from "./components/Tasklist";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS Fundamental", status: 0 },
    { id: "task_2", title: "Code a todolist lv 2", status: 0 },
  ]);
  const [showImcomplete, setShowImcomplete] = useState(false);
  const [newTasks, setNewTasks] = useState("");

  const handleSetStatus = (id, newStatus) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: newStatus };
        }
        return task;
      })
    );
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    if (newTasks) {
      const task = {
        id: Date.now(),
        title: newTasks,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTasks("");
    }
  };
  const handleInputChange = (e) => {
    setNewTasks(e.target.value);
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title="Todo List" subTitle="Get Things Done" />
      <Tasklist
        tasks={tasks}
        showImcomplete={showImcomplete}
        handleSetStatus={handleSetStatus}
        removeTask={removeTask}
        setShowImcomplete={setShowImcomplete}
      />
      <AddTask
        handleNewTask={handleNewTask}
        newTasks={newTasks}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
