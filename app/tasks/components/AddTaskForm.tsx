"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BaseSchema = z.object({
  title: z.string().min(2).max(50),
  category: z.enum(["dailies", "habits", "todo"]),
  type: z.enum(["static", "timed"]),
});

const StaticSchema = BaseSchema.extend({
  points: z.coerce.number().min(1).max(9999),
});

const TimedSchema = BaseSchema.extend({
  tiers: z.array(
    z.object({
      time: z.number().min(1).max(720),
      points: z.number().min(1).max(9999),
    })
  ),
});

const formSchema = StaticSchema.or(TimedSchema);

const AddTaskForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "dailies",
      type: "static",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Title" {...field} />
              </FormControl>
              <FormDescription>This is the title of your task</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="static">Static</SelectItem>
                  <SelectItem value="timed">Timed</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="points"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Points</FormLabel>
              <FormControl>
                <Input placeholder="Enter points" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddTaskForm;
