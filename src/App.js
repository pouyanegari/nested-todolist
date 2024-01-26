import classes from "./App.module.css";
import TasksList from "./Components/TasksList";
import { useTasksStore } from "./store/tasksContext";

const App = () => {
  const tasksStore = useTasksStore();

  return (
    <div className={classes.container}>
      <div>
        <button
          className={classes.addTaskBtn}
          onClick={() => tasksStore.addTaskHandler()}
        >
          Add a new Task
        </button>
      </div>
      <TasksList />
    </div>
  );
};

export default App;
