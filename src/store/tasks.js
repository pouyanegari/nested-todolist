const initialTasks = [
  {
    id: "t1",
    title: "research1",
    order: 1,
    showSubTasks: true,
    subTasks: [],
  },
  {
    id: "t2",
    title: "research2",
    order: 2,
    showSubTasks: true,
    subTasks: [],
  },
];

export const createTasksStore = () => {
  return {
    tasks: initialTasks,
    // Since We are allowed to mutate state while using MobX and actually it prefers mutation we'll mutate or tasks array
    addSubTaskHandler(targetedTask, parentTasks) {
      const targetedTaskIndex = parentTasks.findIndex(
        (task) => task.id === targetedTask.id
      );
      if (targetedTaskIndex > -1) {
        const newOrder = parentTasks[targetedTaskIndex].subTasks.length + 1;
        parentTasks[targetedTaskIndex].subTasks.push({
          id: Math.ceil(Math.random() * 19861245),
          title: "",
          order: newOrder,
          showSubTasks: true,
          subTasks: [],
        });
      }
    },
    deleteTaskHandler(targetedTask, parentTasks) {
      const targetedTaskIndex = parentTasks.findIndex(
        (task) => task.id === targetedTask.id
      );
      if (targetedTaskIndex > -1) {
        const targetedTaskOrder = parentTasks[targetedTaskIndex].order;
        if (targetedTaskOrder !== parentTasks.length)
          for (const task of parentTasks) {
            if (task.order > targetedTaskOrder) task.order--;
          }
        parentTasks.splice(targetedTaskIndex, 1);
      }
    },
    decreaseOrderHandler(targetedTask, parentTasks) {
      const decreasedTaskIndex = parentTasks.findIndex(
        (task) => task.id === targetedTask.id
      );
      if (decreasedTaskIndex > -1) {
        const currentOrder = parentTasks[decreasedTaskIndex].order;
        if (currentOrder !== 1) {
          const increasedTaskIndex = parentTasks.findIndex(
            (task) => task.order === currentOrder - 1
          );
          parentTasks[increasedTaskIndex].order++;
          parentTasks[decreasedTaskIndex].order--;
        }
      }
    },
    increaseOrderHandler(targetedTask, parentTasks) {
      const increasedTaskIndex = parentTasks.findIndex(
        (task) => task.id === targetedTask.id
      );
      if (increasedTaskIndex > -1) {
        const currentOrder = parentTasks[increasedTaskIndex].order;
        if (currentOrder !== parentTasks.length) {
          const decreasedTaskIndex = parentTasks.findIndex(
            (task) => task.order === currentOrder + 1
          );
          parentTasks[increasedTaskIndex].order++;
          parentTasks[decreasedTaskIndex].order--;
        }
      }
    },
    changeTaskTitleHandler(targetedTask, parentTasks, value) {
      const targetedTaskIndex = parentTasks.findIndex(
        (task) => task.id === targetedTask.id
      );
      if (targetedTaskIndex > -1) parentTasks[targetedTaskIndex].title = value;
    },
    showHideSubTasksToggeller(targetedTask, parentTasks) {
      const targetedTaskIndex = parentTasks.findIndex(
        (task) => task.id === targetedTask.id
      );
      if (targetedTaskIndex > -1)
        parentTasks[targetedTaskIndex].showSubTasks =
          !parentTasks[targetedTaskIndex].showSubTasks;
    },
  };
};
