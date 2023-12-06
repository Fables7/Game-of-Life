import { Card, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useSplitData from "@/hooks/useSplitData";
import { TaskType } from "./columns";
import DailyTasks from "./components/DailyTasks";
import Habits from "./components/HabitTasks";
import ToDoTasks from "./components/ToDoTasks";


const tasks: TaskType[] = [
  {
    id: 1,
    title: "Task 1",
    points: 300,
    category: "dailies",
  },
  {
    id: 2,
    title: "Task 2",
    tiers: [
      { time: 60, points: 3 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
  },
  {
    id: 3,
    title: "Task 3",
    points: 400,
    category: "habits",
  },
  {
    id: 4,
    title: "Task 4",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "habits",
  },
  {
    id: 5,
    title: "Task 4",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
  },
  {
    id: 6,
    title: "Task 4",
    tiers: [
      { time: 60, points: 400 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
  },
];

const TasksPage = () => {
  const { dailyTasks, habitTasks, todoTasks } = useSplitData(tasks);
  console.log(tasks);
  return (
    <div className=" p-5 ">
      <Card className="w-full">
        <CardHeader>
          <Tabs defaultValue="dailies">
            <TabsList>
              <TabsTrigger value="dailies">Dailies</TabsTrigger>
              <TabsTrigger value="habits">Habits</TabsTrigger>
              <TabsTrigger value="to-do">To Do</TabsTrigger>
            </TabsList>
            <TabsContent value="dailies">
              <DailyTasks tasks={dailyTasks} />
            </TabsContent>
            <TabsContent value="habits">
              <Habits tasks={habitTasks} />
            </TabsContent>
            <TabsContent value="to-do">
              <ToDoTasks tasks={todoTasks} />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TasksPage;
