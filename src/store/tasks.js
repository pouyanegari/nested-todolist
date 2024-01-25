export const createTasksStore = () => {
  return {
    tasks: [
      {
        id: "t1",
        title: "practice your project",
        order: 1,
        subTasks: [{ id: "r1", title: "wash dishes", order: 1, subTasks: [] }],
      },
      {
        id: "t2",
        title: "research",
        order: 1,
        subTasks: [{ id: "r1", title: "wash dishes", order: 1, subTasks: [] }],
      },
    ],
    counter: 0,
    increase(payload) {
      this.counter = this.counter + payload;
    },
  };
};
