import { useState } from "react";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import "@/styles/todo.scss";

export default function TodoApp() {
  const [tasks, setTasks] = useState<
    { id: number; text: string; completed: boolean }[]
  >([]);

  const addTask = (text: string) => {
    if (text.trim()) {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
}
