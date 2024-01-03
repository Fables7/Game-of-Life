"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import TaskButton from "./components/AddTaskButton";
import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TaskForm from "./components/TaskForm";
import { ScrollArea } from "@/components/ui/scroll-area";

type Tiers = {
  time: number;
  points: number;
};

type BaseTask = {
  id: number;
  title: string;
  category: string;
  priority: "low" | "medium" | "high";
};

export type TimedTask = BaseTask & {
  tiers: Tiers[];
};

export type Task = BaseTask & {
  points: number;
};

export type TaskType = TimedTask | Task;

const baseColumns: ColumnDef<BaseTask>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <div className="flex w-[700px] items-center">
          <span>{row.getValue("title")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    id: "redeem",
    cell: () => {
      return (
        <div>
          <Button>Redeem</Button>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <div>
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className=" sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DialogTrigger asChild className="w-full">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuItem className="text-red-500">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogOverlay className="fixed inset-0 bg-black/50" />
            <DialogContent className="p-4">
              <ScrollArea className="h-[500px]  p-4">
                <DialogHeader>
                  <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>
                <TaskForm />
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];

const timedTaskSpecificColumns: ColumnDef<TimedTask>[] = [
  {
    accessorKey: "tiers",
    header: "Time (min)",
    cell: ({ row }) => {
      const tiers: Tiers[] = row.getValue("tiers");
      if (tiers) {
        return (
          <div className="flex flex-col pl-2">
            {tiers.map((tier) => {
              return <span key={tier.time}>{tier.time}</span>;
            })}
          </div>
        );
      } else {
        return <span>time</span>;
      }
    },
  },

  {
    accessorKey: "tiers",
    id: "points",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Points
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const tiers: Tiers[] = row.getValue("points");
      if (tiers) {
        return (
          <div className="flex flex-col  pl-5">
            {tiers.map((tier) => {
              return <span key={tier.points}>{tier.points}</span>;
            })}
          </div>
        );
      } else {
        return <span>{row.getValue("points")}</span>;
      }
    },
    sortingFn: (rowA, rowB, colmnId) => {
      const tiersA: Tiers[] = rowA.getValue(colmnId);
      const tiersB: Tiers[] = rowB.getValue(colmnId);

      const numA = tiersA[0].points;
      const numB = tiersB[0].points;

      return numA < numB ? 1 : numA > numB ? -1 : 0;
    },
  },
];

const staticTaskSpecificColumns: ColumnDef<Task>[] = [
  {
    accessorKey: "points",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Points
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <span className="ml-4">{row.getValue("points")}</span>;
    },
  },
];

// Fix typing here
export const timedTaskColumns: ColumnDef<any>[] = [
  baseColumns[0], // Select
  baseColumns[1], // Title
  baseColumns[2], // Priority
  ...timedTaskSpecificColumns,
  baseColumns[3], // Redeem
  baseColumns[4], // Actions
];

export const staticTaskColumns: ColumnDef<any>[] = [
  baseColumns[0], // Select
  baseColumns[1], // Title
  baseColumns[2], // Priority
  ...staticTaskSpecificColumns,
  baseColumns[3], // Redeem
  baseColumns[4], // Actions
];
