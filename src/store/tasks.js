export const createTasksStore = () => {
  return {
    tasks: [
      {
        id: "t1",
        title: "practice your project",
        order: 1,
        subTasks: [
          {
            id: "r1",
            title: "wash dishes",
            order: 1,
            subTasks: [
              {
                id: "e4",
                title: "eat lunch",
                order: 1,
                subTasks: [],
              },
            ],
          },
        ],
      },
      {
        id: "t2",
        title: "research",
        order: 1,
        subTasks: [
          { id: "r2", title: "clean the house", order: 1, subTasks: [] },
        ],
      },
    ],
  };
};
