import React from "react";
import Shop from "./Shop";
import Purchases from "./Purchases";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

const DisplayShop = () => {
  return (
    <Card>
      <Tabs defaultValue="shop">
        <CardHeader>
          <div className="flex items-center justify-between">
            <TabsContent value="shop">
              <CardTitle>Shop</CardTitle>
              <CardDescription>Buy items with your points!</CardDescription>
            </TabsContent>
            <TabsContent value="purchases">
              <CardTitle>Purchases</CardTitle>
              <CardDescription>Redeem your purchases here!</CardDescription>
            </TabsContent>

            <div>
              <TabsList>
                <TabsTrigger value="shop">Shop</TabsTrigger>
                <TabsTrigger value="purchases">Purchases</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <TabsContent value="shop">
            <Shop />
          </TabsContent>
          <TabsContent value="purchases">
            <Purchases />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default DisplayShop;
