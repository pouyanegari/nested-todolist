import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Task.module.css";
import {
  faAnglesDown,
  faAnglesUp,
  faSquarePlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import TasksList from "./TasksList";
import { observer } from "mobx-react";
import { useTasksStore } from "../store/tasksContext";

const Task = observer(({ task, parentTasks }) => {
  const tasksStore = useTasksStore();
  const changeTitleHandler = () => {};
  const increaseOrderHandler = () => {};
  const decreaseOrderHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.taskRow}>
        <div>
          <input
            className={classes.titleInput}
            value={task.title}
            onChange={changeTitleHandler}
          />
        </div>
        <div className={classes.actionButtonsContainer}>
          <span>
            <FontAwesomeIcon onClick={increaseOrderHandler} icon={faAnglesUp} />
          </span>
          <span>
            <FontAwesomeIcon
              onClick={decreaseOrderHandler}
              icon={faAnglesDown}
            />
          </span>
          <span>
            <FontAwesomeIcon onClick={deleteHandler} icon={faTrashCan} />
          </span>
          <span>
            <FontAwesomeIcon
              onClick={() => tasksStore.addSubTaskHandler(task, parentTasks)}
              icon={faSquarePlus}
            />
          </span>
        </div>
      </div>
      {task.subTasks.length > 0 ? <TasksList subTasks={task.subTasks} /> : null}
    </div>
  );
});

export default Task;
