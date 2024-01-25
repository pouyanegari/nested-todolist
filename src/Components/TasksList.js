import { observer } from "mobx-react";
import { useTasksStore } from "../store/tasksContext";
import Task from "./Task";
// import classes from "./TasksList.module.css";

const TasksList = observer(({ subTasks }) => {
  const tasksStore = useTasksStore();
  return (
    <>
      {!subTasks
        ? tasksStore.tasks.map((task) => (
            <Task parentTasks={tasksStore.tasks} task={task} key={task.id} />
          ))
        : subTasks.map((task) => (
            <Task parentTasks={subTasks} task={task} key={task.id} />
          ))}
    </>
  );
});

export default TasksList;
