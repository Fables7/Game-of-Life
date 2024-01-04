import React from "react";
import PointsDisplay from "@/components/PointsDisplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ShopPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Shop</CardTitle>
            <PointsDisplay />
          </div>
          <CardDescription>Buy items with your points!</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Create Item</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopPage;
