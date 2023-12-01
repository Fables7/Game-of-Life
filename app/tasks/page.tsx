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
import { columns, Task } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    tiers: [
      { time: 60, points: 300 },
      { time: 40, points: 150 },
      { time: 20, points: 40 },
    ],
  },
  {
    id: 2,
    title: "Task 2",
    tiers: [
      { time: 60, points: 3 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
  },
  {
    id: 3,
    title: "Task 3",
    tiers: [
      { time: 60, points: 400 },
      { time: 40, points: 300 },
      { time: 20, points: 100 },
    ],
  },
  {
    id: 4,
    title: "Task 4",
    tiers: [
      { time: 60, points: 500 },
      { time: 40, points: 2 },
      { time: 20, points: 1 },
    ],
  },
];

const TasksPage = () => {
  return (
    <div className="flex justify-center p-5">
      <Card className="w-[1000px]">
        <CardHeader>
          <CardTitle>Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={tasks} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TasksPage;
