import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";
import { createTasksStore } from "./tasks";

const TasksContext = createContext({
  tasks: [
    { id: null, order: null, showSubTasks: null, subTasks: [], title: null },
  ],
  changeTaskTitleHandler: () => {},
  increaseOrderHandler: () => {},
  deleteTaskHandler: () => {},
  decreaseOrderHandler: () => {},
  addSubTaskHandler: () => {},
  showHideSubTasksToggeller: () => {},
});

export const TasksProvider = ({ children }) => {
  const tasksStore = useLocalObservable(createTasksStore);

  return (
    <TasksContext.Provider value={tasksStore}>{children}</TasksContext.Provider>
  );
};
export const useTasksStore = () => useContext(TasksContext);
