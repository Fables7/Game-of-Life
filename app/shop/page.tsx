import PointsDisplay from "@/components/PointsDisplay";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Shop from "./components/Shop";



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
          <Shop />
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopPage;
