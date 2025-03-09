import { ReactNode } from "react";
import { TodoTag } from "../tag";

export type TodoItemType = {
  List: string | undefined;
  createdAt: ReactNode;
  status: string;
  id: number;
  todoList: string;
  tags: TodoTag[];
  completed: boolean;
  title: string;
};
export type TodoItem = {
  id: number;
  todoList: string;
  status: "active" | "completed";
};
