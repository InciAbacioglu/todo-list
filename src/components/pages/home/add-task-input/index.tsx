import React, { useState } from "react";
import styles from "./add-task-input.module.scss";

interface AddTaskInputProps {
  onAddTask: (task: string) => void;
  onCancel: () => void;
}

const AddTaskInput: React.FC<AddTaskInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yeni görev ekleyin..."
        className={styles.input}
      />
      <button className={styles.button} onClick={handleAddTask}>
        Ekle
      </button>
    </div>
  );
};

export default AddTaskInput;
