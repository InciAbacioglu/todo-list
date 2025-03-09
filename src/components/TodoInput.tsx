import { useState } from "react";

interface TodoInputProps {
  addTask: (text: string) => void;
}

export default function TodoInput({ addTask }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(text);
      setText("");
    }
  };

  return (
    <input
      type="text"
      className="todo-input"
      placeholder="Add a task..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleSubmit}
    />
  );
}
