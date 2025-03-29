
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Droplets, Thermometer, Zap, Gauge } from "lucide-react";

const IoTDevices = () => {
  return (
    <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>Connected Devices</CardTitle>
        <CardDescription>
          Manage and monitor all IoT devices on your farm
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-agro-blue/20 text-agro-blue rounded-full">
                <Droplets className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Soil Moisture Sensors</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">12 devices connected</p>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Budget-friendly</Badge>
                </div>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 text-red-600 rounded-full">
                <Thermometer className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Temperature Sensors</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">8 devices connected</p>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Low-cost</Badge>
                </div>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-full">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Power Monitoring</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">3 devices connected</p>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Cost-effective</Badge>
                </div>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
                <Gauge className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium">Smart Sprinklers</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">5 devices connected</p>
                  <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">Affordable</Badge>
                </div>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
        
        <Button className="w-full">Add New Device</Button>
      </CardContent>
    </Card>
  );
};

export default IoTDevices;
