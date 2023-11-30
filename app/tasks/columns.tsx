"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export type Task = {
  id: number;
  title: string;
  time: 20 | 40 | 60 | "Static";
  points: number;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "time",
    header: "Time (min)",
  },
  {
    accessorKey: "points",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Points
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="text-right">{row.getValue("points")}</div>;
    },
  },
  {
    id: "redeem",
    cell: ({ row }) => {
      return (
        <div className="w-2">
          <Button>Redeem</Button>
        </div>
      );
    },
  },
];
