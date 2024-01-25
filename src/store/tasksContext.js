import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";
import { createTasksStore } from "./tasks";

const TasksContext = createContext({
  tasks: [{ id: null, order: null, subTasks: [], title: null }],
  changeTitleHandler: () => {},
  increaseOrderHandler: () => {},
  deleteTaskHandler: () => {},
  decreaseOrderHandler: () => {},
  addSubTaskHandler: () => {},
});

export const TasksProvider = ({ children }) => {
  const tasksStore = useLocalObservable(createTasksStore);

  return (
    <TasksContext.Provider value={tasksStore}>{children}</TasksContext.Provider>
  );
};
export const useTasksStore = () => useContext(TasksContext);
