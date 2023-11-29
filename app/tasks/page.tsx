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
  { id: 1, title: "Task 1", points: 10, time: 20 },
  { id: 2, title: "Task 2", points: 20, time: 40 },
  { id: 3, title: "Task 3", points: 30, time: 60 },
  { id: 4, title: "Task 4", points: 40, time: "Static" },
  { id: 5, title: "Task 5", points: 50, time: "Static" },
  { id: 6, title: "Task 6", points: 60, time: "Static" },
];

const TasksPage = () => {
  return (
    <div className="flex justify-center p-5">
      <Card className=" w-full">
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
