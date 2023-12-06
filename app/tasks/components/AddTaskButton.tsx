"use client";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

const AddTaskButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+</Button>
      </DialogTrigger>
      <DialogOverlay className="fixed inset-0 bg-black/50" />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a Task</DialogTitle>
          <DialogDescription>
            Here you can create a Static or Time based task
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskButton;
