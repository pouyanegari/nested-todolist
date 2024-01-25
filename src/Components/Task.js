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

const Task = observer(({ task }) => {
  const changeHandler = () => {};
  const increaseOrderHandler = () => {};
  const decreaseOrderHandler = () => {};
  const deleteHandler = () => {};
  const addSubTaskHandler = () => {};
  return (
    <div className={classes.container}>
      <div className={classes.taskRow}>
        <div>
          <input
            className={classes.titleInput}
            value={task.title}
            onChange={changeHandler}
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
            <FontAwesomeIcon onClick={addSubTaskHandler} icon={faSquarePlus} />
          </span>
        </div>
      </div>
      {task.subTasks.length > 0 ? <TasksList subTasks={task.subTasks} /> : null}
    </div>
  );
});

export default Task;
