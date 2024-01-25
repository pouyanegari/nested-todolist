import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Task.module.css";
import {
  faAngleDown,
  faAngleRight,
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

  return (
    <div className={classes.container}>
      <div className={classes.taskRow}>
        <div className={classes.leftPartOfRowContainer}>
          {task.subTasks.length > 0 ? (
            <span
              onClick={() =>
                tasksStore.showHideSubTasksToggeller(task, parentTasks)
              }
              className={classes.showSubTasksToggelerContainer}
            >
              {task.showSubTasks ? (
                <FontAwesomeIcon icon={faAngleDown} />
              ) : (
                <FontAwesomeIcon icon={faAngleRight} />
              )}
            </span>
          ) : null}
          <input
            className={classes.titleInput}
            placeholder="task title"
            value={task.title}
            onChange={(e) =>
              tasksStore.changeTaskTitleHandler(
                task,
                parentTasks,
                e.target.value
              )
            }
          />
        </div>
        <div className={classes.actionButtonsContainer}>
          <span>
            <FontAwesomeIcon
              onClick={() => tasksStore.decreaseOrderHandler(task, parentTasks)}
              icon={faAnglesUp}
            />
          </span>
          <span>
            <FontAwesomeIcon
              onClick={() => tasksStore.increaseOrderHandler(task, parentTasks)}
              icon={faAnglesDown}
            />
          </span>
          <span>
            <FontAwesomeIcon
              className={classes.pointerCursor}
              onClick={() => tasksStore.deleteTaskHandler(task, parentTasks)}
              icon={faTrashCan}
            />
          </span>
          <span>
            <FontAwesomeIcon
              className={classes.pointerCursor}
              onClick={() => tasksStore.addSubTaskHandler(task, parentTasks)}
              icon={faSquarePlus}
            />
          </span>
        </div>
      </div>
      {task.subTasks.length > 0 ? (
        task.showSubTasks ? (
          <TasksList subTasks={task.subTasks} />
        ) : null
      ) : null}
    </div>
  );
});

export default Task;
