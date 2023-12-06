import { TimedTask, Task, TaskType } from "@/app/tasks/columns";

interface acc {
  static: Task[];
  timeBased: TimedTask[];
}

const useSplitData = (data: TaskType[]) => {
  const filterByCategory = (category: string) => {
    const filteredData = data.filter((task) => task.category === category);

    return filteredData.reduce(
      (acc: acc, task) => {
        if ("tiers" in task) {
          acc.timeBased.push(task);
        } else {
          acc.static.push(task);
        }
        return acc;
      },
      { static: [], timeBased: [] }
    );
  };
  const dailyTasks = filterByCategory("dailies");
  const habitTasks = filterByCategory("habits");
  const todoTasks = filterByCategory("todos");

  return { dailyTasks, habitTasks, todoTasks };
};

export default useSplitData;
