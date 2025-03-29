
import MainLayout from "@/components/MainLayout";
import StatCard from "@/components/dashboard/StatCard";
import CropHealthChart from "@/components/dashboard/CropHealthChart";
import MarketPriceChart from "@/components/dashboard/MarketPriceChart";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import PestAlertWidget from "@/components/dashboard/PestAlertWidget";
import { Leaf, TrendingUp, ShoppingBasket, Users } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to AgroHarmony. View your farming overview and insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Crop Health Score" 
            value="87%" 
            trend="up"
            trendValue="3% from last month"
            icon={<Leaf className="h-6 w-6" />}
          />
          <StatCard 
            title="Crop Yield Forecast" 
            value="7.2 t/ha" 
            trend="up"
            trendValue="5% above average"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <StatCard 
            title="Marketplace Activity" 
            value="24 orders" 
            trend="neutral"
            trendValue="Same as last week"
            icon={<ShoppingBasket className="h-6 w-6" />}
          />
          <StatCard 
            title="Community Farmers" 
            value="356" 
            trend="up"
            trendValue="12 new this week"
            icon={<Users className="h-6 w-6" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CropHealthChart />
          <MarketPriceChart />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeatherWidget />
          <PestAlertWidget />
        </div>
        
        <div className="stat-card p-6">
          <h3 className="text-lg font-medium mb-3">Recommended Actions</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <div className="p-1 bg-agro-green-pale/30 text-agro-green-dark rounded-full mt-0.5">
                <Leaf className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Apply nitrogen fertilizer to rice fields</p>
                <p className="text-sm text-muted-foreground">Low nitrogen levels detected in soil samples</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="p-1 bg-agro-blue/20 text-agro-blue rounded-full mt-0.5">
                <TrendingUp className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Harvest mustard crop within 7 days</p>
                <p className="text-sm text-muted-foreground">Optimal maturity predicted based on growth pattern</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="p-1 bg-amber-100 text-amber-700 rounded-full mt-0.5">
                <AlertCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Monitor for rice stem borer in northern fields</p>
                <p className="text-sm text-muted-foreground">Neighboring farms have reported infestations</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
