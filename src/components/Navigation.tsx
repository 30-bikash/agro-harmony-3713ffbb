
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Leaf, BarChart3, ShoppingBasket, Cloud, AlertCircle, Settings } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const links = [
    { name: "Dashboard", path: "/", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Crop Monitoring", path: "/crops", icon: <Leaf className="h-5 w-5" /> },
    { name: "Marketplace", path: "/marketplace", icon: <ShoppingBasket className="h-5 w-5" /> },
    { name: "Weather & Soil", path: "/weather-soil", icon: <Cloud className="h-5 w-5" /> },
    { name: "Pest Detection", path: "/pests", icon: <AlertCircle className="h-5 w-5" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <nav className="hidden md:block bg-white shadow-md rounded-lg p-4 h-full">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="bg-agro-green-dark text-white p-2 rounded-lg">
          <Leaf className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-bold text-xl">AgroHarmony</h1>
          <p className="text-xs text-muted-foreground">Smart Farming Platform</p>
        </div>
      </div>
      
      <div className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              location.pathname === link.path
                ? "bg-agro-green-pale/20 text-agro-green-dark"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
