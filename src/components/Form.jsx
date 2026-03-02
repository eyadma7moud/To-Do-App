import { useState } from "react";

export default function Form({ onAddTasks }) {
  const [description, setDescription] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (!description) return;
    const newTask = { description, done: false, id: Date.now() };
    onAddTasks(newTask);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={addTask}>
      <h3>Let's make it happen👌</h3>
      <input
        type="text"
        placeholder="Task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
