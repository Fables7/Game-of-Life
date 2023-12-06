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

type Tiers = {
  time: number;
  points: number;
};

type BaseTask = {
  id: number;
  title: string;
  category: string;
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
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return (
        <div className="flex w-[200px] items-center">
          <span>{row.getValue("title")}</span>
        </div>
      );
    },
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
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
          <div className="flex flex-col">
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
          <div className="flex flex-col">
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
    header: "Points",
  },
];

// Fix typing here
export const timedTaskColumns: ColumnDef<any>[] = [
  baseColumns[0], // Title
  ...timedTaskSpecificColumns,
  baseColumns[1], // Redeem
  baseColumns[2], // Actions
];

export const staticTaskColumns: ColumnDef<any>[] = [
  baseColumns[0], // Title
  ...staticTaskSpecificColumns,
  baseColumns[1], // Redeem
  baseColumns[2], // Actions
];
