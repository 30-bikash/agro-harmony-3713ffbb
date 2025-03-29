
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Battery, Droplets, Gauge, Thermometer, Wifi, Zap } from "lucide-react";

const IoTDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span>Soil Moisture</span>
              <Droplets className="h-4 w-4 text-agro-blue" />
            </CardTitle>
            <CardDescription>Field Zone A</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">Optimal range: 60-75%</p>
            <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-agro-blue rounded-full" style={{ width: "68%" }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span>Temperature</span>
              <Thermometer className="h-4 w-4 text-red-500" />
            </CardTitle>
            <CardDescription>Greenhouse 1</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27°C</div>
            <p className="text-xs text-muted-foreground">Optimal range: 24-28°C</p>
            <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span>Power Usage</span>
              <Zap className="h-4 w-4 text-yellow-500" />
            </CardTitle>
            <CardDescription>Pumping Station</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.8 kW/h</div>
            <p className="text-xs text-muted-foreground">Daily average: 2.1 kW/h</p>
            <div className="mt-2 h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>
            Real-time monitoring of your IoT system components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 text-green-700 rounded-full">
                  <Wifi className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="font-medium">Gateway Connectivity</p>
                  <p className="text-xs text-muted-foreground">Last connected: 2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-500 font-medium">Online</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 text-green-700 rounded-full">
                  <Battery className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="font-medium">Battery Status</p>
                  <p className="text-xs text-muted-foreground">Sensor Network</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium">87%</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-100 text-green-700 rounded-full">
                  <Activity className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="font-medium">Data Collection</p>
                  <p className="text-xs text-muted-foreground">Sensor readings</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-500 font-medium">Active</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IoTDashboard;
