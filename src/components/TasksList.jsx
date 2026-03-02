import { useState } from "react";
import Task from "./Task";

export default function TasksList({ tasks, onDeleteTask, onToggleTask }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedTasks;

  if (sortBy === "input") sortedTasks = tasks;
  if (sortBy === "description")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "done")
    sortedTasks = tasks.slice().sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="list">
      <ul>
        {sortedTasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by date modified</option>
          <option value="description">Sort by name</option>
          <option value="done">Sort by status</option>
        </select>
        <button onClick={() => tasks.map((task) => onDeleteTask(task.id))}>
          Clear Tasks
        </button>
      </div>
    </div>
  );
}
