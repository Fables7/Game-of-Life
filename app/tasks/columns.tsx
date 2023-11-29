"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

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
    header: "Time",
  },
  {
    accessorKey: "points",
    header: () => <div className="text-right">Points</div>,
    cell: ({ row }) => {
      return <div className="text-right">{row.getValue("points")}</div>;
    },
  },
  {
    accessorKey: "redeem",
    header: "Redeem",
    cell: ({ row }) => {
      return <Button>Redeem</Button>;
    },
  },
];
