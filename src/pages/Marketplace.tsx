
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ShoppingBasket } from "lucide-react";

const Marketplace = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Marketplace</h1>
          <p className="text-muted-foreground">
            Connect directly with buyers and sellers in the agricultural ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for crops, products, or sellers" 
              className="pl-10" 
            />
          </div>
          <Button variant="outline" className="shrink-0">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketplaceItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="h-48 bg-muted/30 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">Product Image</p>
                </div>
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium">
                  {item.price}/kg
                </div>
              </div>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <div className="text-xs text-muted-foreground flex justify-between">
                  <span>Seller: {item.seller}</span>
                  <span>Location: {item.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-green-700">
                    {item.availability}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">Contact Seller</Button>
                <Button size="sm">
                  <ShoppingBasket className="h-4 w-4 mr-2" />
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

const marketplaceItems = [
  {
    id: 1,
    name: "Premium Rice Grain",
    seller: "Assam Rice Farms",
    location: "Jorhat",
    price: "₹35",
    availability: "Currently available",
    description: "High-quality rice grain, organically grown without pesticides."
  },
  {
    id: 2,
    name: "Organic Tea Leaves",
    seller: "Dibrugarh Tea Estates",
    location: "Dibrugarh",
    price: "₹120",
    availability: "Limited stock",
    description: "Premium grade tea leaves, handpicked from the finest tea gardens."
  },
  {
    id: 3,
    name: "Fresh Vegetables Bundle",
    seller: "Nagaon Organic Farms",
    location: "Nagaon",
    price: "₹55",
    availability: "Freshly harvested",
    description: "Mixed vegetable bundle including okra, eggplant, and gourds."
  },
  {
    id: 4,
    name: "Jute Fiber - Grade A",
    seller: "Goalpara Jute Co-op",
    location: "Goalpara",
    price: "₹45",
    availability: "In stock",
    description: "High-quality jute fiber for textile and craft industries."
  },
  {
    id: 5,
    name: "Premium Mustard Seeds",
    seller: "Barpeta Seed Farm",
    location: "Barpeta",
    price: "₹85",
    availability: "Seasonal availability",
    description: "High-oil content mustard seeds for oil extraction and cooking."
  },
  {
    id: 6,
    name: "Organic Ginger",
    seller: "Karbi Farms",
    location: "Karbi Anglong",
    price: "₹60",
    availability: "Freshly harvested",
    description: "Organically grown ginger with high medicinal properties."
  }
];

export default Marketplace;
