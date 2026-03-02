export default function Status({ numTasks, doneTasks }) {
  return (
    <footer className="stats">
      <em>
        {numTasks == 0
          ? "Lets Start Adding Tasks🤩"
          : doneTasks === numTasks
            ? "Congatulation, You Done All Tasks👏"
            : ` you have ${numTasks} tasks, and you already done ${doneTasks} (${Math.ceil((doneTasks / numTasks) * 100)}%)`}
      </em>
    </footer>
  );
}
