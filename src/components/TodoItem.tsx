interface TodoItemProps {
  id: number;
  task: string;
  completed: boolean;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

export default function TodoItem({
  id,
  task,
  completed,
  toggleTask,
  removeTask,
}: TodoItemProps) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
      />
      <span className={completed ? "completed" : ""}>{task}</span>
      <button onClick={() => removeTask(id)}>X</button>
    </div>
  );
}
