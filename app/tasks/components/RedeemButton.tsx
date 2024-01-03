import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import usePoints from "@/hooks/usePoints";
import { Tiers } from "../columns";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface RedeemButtonProps {
  points: number;
  tiers?: Tiers[];
}

const schema = z.object({
  hours: z.number().min(0).max(24),
  minutes: z.number().min(0).max(60),
});

const RedeemButton = ({ points, tiers }: RedeemButtonProps) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      hours: 0,
      minutes: 0,
    },
  });
  const { register } = form;
  const { addPoints } = usePoints();

  const calcPoints = (tiers: any, time: number) => {
    tiers.sort((a: any, b: any) => b.time - a.time);

    let totalPoints = 0;

    for (let tier of tiers) {
      let count = Math.floor(time / tier.time);

      totalPoints += tier.points * count;

      time -= count * tier.time;

      //   if (time < tier.time) {
      //     break;
      //   }
    }
    return totalPoints;
  };

  const onSubmit = (values: z.infer<typeof schema>) => {
    if (tiers) {
      const { hours, minutes } = values;
      const time = hours * 60 + minutes;
      const points = calcPoints(tiers, time);
      addPoints(points);
      return;
    }
    addPoints(points);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex gap-x-4">
          <Button type="submit">Redeem</Button>
          {tiers && (
            <>
              <FormField
                control={form.control}
                name="hours"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-20"
                        type="number"
                        {...register("hours", {
                          valueAsNumber: true,
                        })}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="minutes"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-20"
                        type="number"
                        {...register("minutes", {
                          valueAsNumber: true,
                        })}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
      </form>
    </Form>
  );
};

export default RedeemButton;
