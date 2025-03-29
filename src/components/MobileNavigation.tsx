
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Leaf, BarChart3, ShoppingBasket, Cloud, AlertCircle, Settings, Menu, X } from "lucide-react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="md:hidden">
      <div className="flex items-center justify-between bg-white shadow-sm px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-agro-green-dark text-white p-1 rounded-lg">
            <Leaf className="h-5 w-5" />
          </div>
          <h1 className="font-bold text-lg">AgroHarmony</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
          <div className="p-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
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
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
