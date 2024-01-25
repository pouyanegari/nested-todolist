import "./App.css";
import { observer } from "mobx-react";
import { useTasksStore } from "./store/tasksContext";

const App = observer(({}) => {
  const tasksStore = useTasksStore();

  return (
    <div className="container">
      {tasksStore.tasks.map((each) => (
        <p key={each.id}>{each.title}</p>
      ))}
      <p>{tasksStore.counter}</p>
      <p onClick={() => tasksStore.increase(6)}>Click</p>
    </div>
  );
});

export default App;
