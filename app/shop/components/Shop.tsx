"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import ShopItem from "./ShopItem";
import Cart from "./Cart";
import usePoints from "@/hooks/usePoints";

const Items = [
  {
    id: 1,
    title: "1 Hour of Genshin",
    price: 100,
  },
  {
    id: 2,
    title: "2 Hours of Youtube",
    price: 100,
  },
  {
    id: 3,
    title: "Buy a new game",
    price: 1000,
  },
  {
    id: 4,
    title: "Buy a plush",
    price: 100,
  },
  {
    id: 5,
    title: "Book a holiday",
    price: 9000,
  },
  {
    id: 5,
    title: "2 Hours of Youtube",
    price: 100,
  },
  {
    id: 5,
    title: "2 Hours of Youtube",
    price: 100,
  },
  {
    id: 5,
    title: "2 Hours of Youtube",
    price: 100,
  },
  {
    id: 5,
    title: "2 Hours of Youtube",
    price: 100,
  },
  {
    id: 5,
    title: "2 Hours of Youtube",
    price: 100,
  },
];

interface CartProps {
  title: string;
  price: number;
}

const Shop = () => {
  const { userPoints } = usePoints();
  const [remainingPoints, setRemainingPoints] = React.useState(userPoints);
  const [cart, setCart] = React.useState<CartProps[]>([]);
  const addToCart = (title: string, price: number) => {
    setCart((prev) => [...prev, { title, price }]);
    setRemainingPoints((prev) => prev - price);
  };
  const removeFromCart = (index: number, points: number) => {
    setCart((prev) => {
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
    setRemainingPoints((prev) => prev + points);
  };
  return (
    <div className="flex justify-between">
      <div className="w-full">
        <Button>Create Item</Button>
        <div className=" flex-wrap flex gap-4 mt-4">
          {Items.map((item) => (
            <ShopItem key={item.id} {...item} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <Cart
        cart={cart}
        remainingPoints={remainingPoints}
        totalCost={userPoints - remainingPoints}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default Shop;
