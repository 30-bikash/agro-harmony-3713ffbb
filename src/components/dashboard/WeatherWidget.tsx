
import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";

const WeatherWidget = () => {
  return (
    <div className="stat-card">
      <h3 className="text-base font-medium mb-3">Today's Weather</h3>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Cloud className="h-10 w-10 text-agro-blue mr-2" />
          <div>
            <p className="text-2xl font-bold">28°C</p>
            <p className="text-xs text-muted-foreground">Partly Cloudy</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Guwahati, Assam</p>
          <p className="text-xs text-muted-foreground">Updated 1 hour ago</p>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="flex items-center">
          <Droplets className="h-4 w-4 text-agro-blue mr-1" />
          <span className="text-sm">78% Humidity</span>
        </div>
        <div className="flex items-center">
          <Wind className="h-4 w-4 text-muted-foreground mr-1" />
          <span className="text-sm">8 km/h Wind</span>
        </div>
        <div className="flex items-center">
          <Thermometer className="h-4 w-4 text-agro-brown mr-1" />
          <span className="text-sm">30° High</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
