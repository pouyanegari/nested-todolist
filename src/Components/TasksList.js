import { observer } from "mobx-react";
import { useTasksStore } from "../store/tasksContext";
import Task from "./Task";
// import classes from "./TasksList.module.css";

const TasksList = observer(({ subTasks }) => {
  const tasksStore = useTasksStore();
  return (
    <>
      {!subTasks
        ? [...tasksStore.tasks]
            .sort((a, b) =>
              a.order > b.order ? 1 : b.order > a.order ? -1 : 0
            )
            .map((task) => (
              <Task parentTasks={tasksStore.tasks} task={task} key={task.id} />
            ))
        : [...subTasks]
            .sort((a, b) =>
              a.order > b.order ? 1 : b.order > a.order ? -1 : 0
            )
            .map((task) => (
              <Task parentTasks={subTasks} task={task} key={task.id} />
            ))}
    </>
  );
});

export default TasksList;
