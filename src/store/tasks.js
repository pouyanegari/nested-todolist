const initialTasks = [
  // {
  //   id: "t1",
  //   title: "practice your project",
  //   order: 1,
  //   subTasks: [
  //     {
  //       id: "r1",
  //       title: "wash dishes",
  //       order: 1,
  //       subTasks: [
  //         {
  //           id: "e4",
  //           title: "eat lunch",
  //           order: 1,
  //           subTasks: [],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "t1",
    title: "research1",
    order: 1,
    subTasks: [
      // { id: "r2", title: "clean the house", order: 1, subTasks: [] }
    ],
  },
  {
    id: "t2",
    title: "research2",
    order: 2,
    subTasks: [],
  },
  {
    id: "t3",
    title: "research3",
    order: 3,
    subTasks: [],
  },
  {
    id: "t4",
    title: "research4",
    order: 4,
    subTasks: [],
  },
  {
    id: "t5",
    title: "research5",
    order: 5,
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
    changeTitleHandler() {},
  };
};
