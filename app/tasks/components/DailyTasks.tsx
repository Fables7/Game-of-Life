import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import { columns, TaskType } from "../columns";
import { DataTable } from "../data-table";

interface Props {
  tasks: TaskType[];
}

const DailyTasks = ({ tasks }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dailies</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={tasks} />
      </CardContent>
    </Card>
  );
};

export default DailyTasks;
