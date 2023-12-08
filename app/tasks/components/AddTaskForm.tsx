"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, FieldErrors } from "react-hook-form";
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

type FormErrors = FieldErrors<{
  title: string;
  category: "dailies" | "habits" | "todo";
  type: "static" | "timed";
  points: number;
  tiers: {
    time: number;
    points: number;
  }[];
}>;

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
      tiers: [{ time: 0, points: 0 }],
    },
  });

  const { control, register } = form;
  const {
    formState: { errors },
  } = form as { formState: { errors: FormErrors } };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tiers",
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
        {form.watch("type") === "timed" ? (
          <FormField
            control={form.control}
            name="tiers"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Tiers</FormLabel>
                  {fields.map((field, index) => (
                    <>
                      <div className="flex gap-4" key={field.id}>
                        <div>
                          <Input
                            placeholder="Enter Time"
                            type="number"
                            {...register(`tiers.${index}.time`, {
                              valueAsNumber: true,
                            })}
                          />
                          {errors.tiers && errors.tiers?.[index]?.time && (
                            <FormMessage>
                              {errors?.tiers[index]?.time?.message}
                            </FormMessage>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder="Enter Points"
                            type="number"
                            {...register(`tiers.${index}.points`, {
                              valueAsNumber: true,
                            })}
                          />
                          {errors.tiers?.[index]?.points && (
                            <FormMessage>
                              {errors?.tiers[index]?.points?.message}
                            </FormMessage>
                          )}
                        </div>
                        <Button
                          disabled={fields.length <= 1}
                          onClick={() => remove(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    </>
                  ))}
                  <Button
                    type="button"
                    // className="mt-4"
                    onClick={() => append({ time: 0, points: 0 })}
                  >
                    Create another tier
                  </Button>
                </FormItem>
              );
            }}
          />
        ) : (
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
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddTaskForm;
