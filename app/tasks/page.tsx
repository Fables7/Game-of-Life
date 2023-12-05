import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";
import { columns, Task, TimedTask } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DailyTasks from "./components/DailyTasks";
import Habits from "./components/HabitTasks";
import ToDoTasks from "./components/ToDoTasks";

const timeTasks: TimedTask[] = [
  {
    id: 1,
    title: "Task 1",
    tiers: [
      { time: 60, points: 300 },
      { time: 40, points: 150 },
      { time: 20, points: 40 },
    ],
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
    tiers: [
      { time: 60, points: 400 },
      { time: 40, points: 300 },
      { time: 20, points: 100 },
    ],
    category: "dailies",
  },
  {
    id: 4,
    title: "Task 4",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
    category: "dailies",
  },
];

const Dailies = [];
const Todos = [];

const TasksPage = () => {
  return (
    <div className=" p-5 ">
      <Card className="w-full">
        <CardHeader>
          <Tabs defaultValue="dailies" className="w-full ">
            <TabsList>
              <TabsTrigger value="dailies">Dailies</TabsTrigger>
              <TabsTrigger value="habits">Habits</TabsTrigger>
              <TabsTrigger value="to-do">To Do</TabsTrigger>
            </TabsList>
            <TabsContent value="dailies">
              <DailyTasks tasks={timeTasks} />
            </TabsContent>
            <TabsContent value="habits">
              <Habits tasks={timeTasks} />
            </TabsContent>
            <TabsContent value="to-do">
              <ToDoTasks tasks={timeTasks} />
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TasksPage;
