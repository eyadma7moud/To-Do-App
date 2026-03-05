export default function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <li>
      <button>
        <input
          type="checkbox"
          value={task.done}
          onChange={() => onToggleTask(task.id)}
        />
      </button>
      <p style={task.done ? { textDecoration: "line-through" } : {}}>
        {task.description}{" "}
      </p>
      <button onClick={() => onDeleteTask(task.id)}>✗</button>
    </li>
  );
}
