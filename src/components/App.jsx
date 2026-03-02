import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import TasksList from "./TasksList";
import Status from "./Status";

const initialTasks = [
  { id: 1, description: "Go to Gym", done: false },
  { id: 2, description: "Finish the Assignment", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : initialTasks;
  });
  const numTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.done).length;

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleDoneTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <Logo />
      <Form onAddTasks={handleAddTask} />
      <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleDoneTask}
      />
      <Status numTasks={numTasks} doneTasks={doneTasks} />
    </div>
  );
}
