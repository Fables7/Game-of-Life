"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CartProps {
  cart: {
    title: string;
    price: number;
  }[];
  remainingPoints: number;
  removeFromCart: (index: number, price: number) => void;
  totalCost: number;
}

interface CartItemProps {
  title: string;
  price: number;
}

const CartItem = ({ title, price }: CartItemProps) => {
  return (
    <div className="flex">
      <h1>
        {title} - {price} pts
      </h1>
    </div>
  );
};

const Cart = ({
  cart,
  remainingPoints,
  removeFromCart,
  totalCost,
}: CartProps) => {
  return (
    <Card className=" max-w-md w-full">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Cart</CardTitle>
          <CardTitle>{remainingPoints} left</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {cart.map((item: CartItemProps, index) => (
          <div key={index} className="flex justify-between mb-2">
            <CartItem title={item.title} price={item.price} />
            <Button onClick={() => removeFromCart(index, item.price)}>
              Remove
            </Button>
          </div>
        ))}
        <div className="flex items-center gap-4">
          <Button disabled={cart.length === 0 || remainingPoints < 0}>
            Checkout
          </Button>
          <h1>{totalCost} pts</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;
