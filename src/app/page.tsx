"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { Trash } from "phosphor-react";
import { TodoItemType } from "../../types/todo-item/index";

export default function Page() {
  const [lists, setLists] = useState<{ name: string; tasks: TodoItemType[] }[]>(
    []
  );
  const [newList, setNewList] = useState<string>("");
  const [isListInputVisible, setIsListInputVisible] = useState(false);

  useEffect(() => {
    const savedLists = localStorage.getItem("lists");
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const totalTasks = lists.reduce((sum, list) => sum + list.tasks.length, 0);

  const handleAddTask = (task: string, listName: string) => {
    if (task.trim() === "") return;
    const newTask: TodoItemType = {
      id: Date.now(),
      todoList: task,
      status: "active",
      List: undefined,
      createdAt: undefined,
      tags: [],
      completed: false,
      title: "",
    };
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.name === listName
          ? { ...list, tasks: [...list.tasks, newTask] }
          : list
      )
    );
  };

  const handleDeleteTask = (listName: string, taskId: number) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.name === listName
          ? {
              ...list,
              tasks: list.tasks.filter((task) => task.id !== taskId),
            }
          : list
      )
    );
  };

  const handleToggleComplete = (listName: string, taskId: number) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.name === listName
          ? {
              ...list,
              tasks: list.tasks.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      status:
                        task.status === "completed" ? "active" : "completed",
                    }
                  : task
              ),
            }
          : list
      )
    );
  };

  const handleAddList = () => {
    if (newList.trim() === "") return;
    setLists([...lists, { name: newList, tasks: [] }]);
    setNewList("");
    setIsListInputVisible(false);
  };

  const handleDeleteList = (listName: string) => {
    setLists(lists.filter((list) => list.name !== listName));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    listName: string
  ) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      handleAddTask(e.currentTarget.value, listName);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className={styles.todoContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>To-Do List</h1>
        <div className={styles.userInfo}>
          <span className={styles.helloUser}>Hello, User!</span>
          <span className={styles.totalTasks}>Total Tasks: {totalTasks}</span>
        </div>
        <button
          onClick={() => setIsListInputVisible(!isListInputVisible)}
          className={styles.addButton}
        >
          + Add List
        </button>
      </div>

      {isListInputVisible && (
        <div className={styles.addList}>
          <input
            type="text"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
            placeholder="New List"
            className={styles.listInput}
          />
          <button onClick={handleAddList} className={styles.addListButton}>
            Add
          </button>
        </div>
      )}

      <div className={styles.listsContainer}>
        {lists.map((list) => (
          <div key={list.name} className={styles.list}>
            <div className={styles.listHeader}>
              <h2>{list.name}</h2>
              <button
                onClick={() => handleDeleteList(list.name)}
                className={styles.deleteListButton}
              >
                <Trash size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder={`Add task to ${list.name}`}
              className={styles.taskInput}
              onKeyDown={(e) => handleKeyDown(e, list.name)}
            />
            <div className={styles.tasks}>
              {list.tasks.map((task) => (
                <div key={task.id} className={styles.task}>
                  <input
                    type="checkbox"
                    checked={task.status === "completed"}
                    onChange={() => handleToggleComplete(list.name, task.id)}
                    className={styles.checkbox}
                  />
                  <span
                    className={
                      task.status === "completed" ? styles.completed : ""
                    }
                    onClick={() => handleToggleComplete(list.name, task.id)}
                  >
                    {task.todoList}
                  </span>
                  <button
                    onClick={() => handleDeleteTask(list.name, task.id)}
                    className={styles.deleteButton}
                  >
                    <Trash size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
