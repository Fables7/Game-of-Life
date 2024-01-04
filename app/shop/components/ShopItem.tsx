import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ShopItemProps {
  title: string;
  price: number;
  addToCart: (title: string, price: number) => void;
}

const ShopItem = (props: ShopItemProps) => {
  const addItemToCart = () => {
    props.addToCart(props.title, props.price);
  };
  return (
    <Card className="w-60 min-h-40  flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardDescription className="flex justify-end">
        <Button onClick={addItemToCart}>{props.price} pts</Button>
      </CardDescription>
    </Card>
  );
};

export default ShopItem;
