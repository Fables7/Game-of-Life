import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import { TaskType, columns } from "../columns";
import { DataTable } from "../data-table";

interface Props {
  tasks: TaskType[];
}

const ToDoTasks = ({ tasks }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ToDoTasks</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={tasks} />
      </CardContent>
    </Card>
  );
};

export default ToDoTasks;
