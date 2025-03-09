import TodoItem from "../components/TodoItem";

interface TodoListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

export default function TodoList({
  tasks,
  toggleTask,
  removeTask,
}: TodoListProps) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.text}
          toggleTask={toggleTask}
          removeTask={removeTask}
          id={0}
          completed={false}
        />
      ))}
    </ul>
  );
}
