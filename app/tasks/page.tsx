import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
    priority: "low",
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
    priority: "medium",
  },
  {
    id: 3,
    title: "Task 3",
    points: 400,
    category: "habits",
    priority: "high",
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
    priority: "low",
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
    priority: "low",
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
    priority: "low",
  },
  {
    id: 7,
    title: "Task 5",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "low",
  },
  {
    id: 8,
    title: "Task 6",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "high",
  },
  {
    id: 9,
    title: "Task 7",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "medium",
  },
  {
    id: 10,
    title: "Task 8",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "medium",
  },
  {
    id: 11,
    title: "Task 9",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "medium",
  },
  {
    id: 12,
    title: "Task 10",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "medium",
  },
  {
    id: 13,
    title: "Task 11",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "high",
  },
  {
    id: 14,
    title: "Task 11",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "high",
  },
  {
    id: 15,
    title: "Task 15",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
    priority: "high",
  },
];

const TasksPage = () => {
  const { dailyTasks, habitTasks, todoTasks } = useSplitData(tasks);
  return (
    <div>
      {/* <XpBar /> */}
      <Card className="w-full">
        <CardHeader>
          <Tabs defaultValue="dailies">
            <TabsList>
              <TabsTrigger value="dailies">Dailies</TabsTrigger>
              <TabsTrigger value="habits">Habits</TabsTrigger>
              <TabsTrigger value="todo">To Do</TabsTrigger>
            </TabsList>
            <Separator className="mt-2" />
            <TabsContent value="dailies">
              <DailyTasks tasks={dailyTasks} />
            </TabsContent>
            <TabsContent value="habits">
              <Habits tasks={habitTasks} />
            </TabsContent>
            <TabsContent value="todo">
              <ToDoTasks tasks={todoTasks} />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TasksPage;
