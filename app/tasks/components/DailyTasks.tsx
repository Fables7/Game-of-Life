"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TaskType,
  TimedTask,
  staticTaskColumns,
  timedTaskColumns
} from "../columns";
import { DataTable } from "../data-table";

interface Props {
  tasks: {
    static: TaskType[];
    timeBased: TimedTask[];
  };
}

const DailyTasks = ({ tasks }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Dailies <Button>+</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="static">
          <TabsList className="w-full">
            <TabsTrigger className="flex-1" value="static">
              Static
            </TabsTrigger>
            <TabsTrigger className="flex-1" value="timed">
              Timed
            </TabsTrigger>
          </TabsList>
          <TabsContent value="static">
            <DataTable columns={staticTaskColumns} data={tasks.static} />
          </TabsContent>
          <TabsContent value="timed">
            <DataTable columns={timedTaskColumns} data={tasks.timeBased} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DailyTasks;
