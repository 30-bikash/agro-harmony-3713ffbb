
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Thermometer, Gauge, Wifi, Droplets, Battery, Zap } from "lucide-react";

const IoTServices = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">IoT Services</h1>
          <p className="text-muted-foreground">
            Monitor and control your farm's IoT devices and sensors.
          </p>
        </div>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
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
              
              <Card>
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
              
              <Card>
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
            
            <Card>
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
          </TabsContent>
          
          <TabsContent value="devices" className="mt-6">
            <Card>
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
                        <p className="text-xs text-muted-foreground">12 devices connected</p>
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
                        <p className="text-xs text-muted-foreground">8 devices connected</p>
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
                        <p className="text-xs text-muted-foreground">3 devices connected</p>
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
                        <p className="text-xs text-muted-foreground">5 devices connected</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button className="w-full">Add New Device</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>IoT Analytics</CardTitle>
                <CardDescription>
                  Historical data and trends from your IoT devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border border-dashed rounded-md">
                  <p className="text-muted-foreground">IoT analytics visualizations coming soon</p>
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button variant="outline" className="w-full">Download Sensor Data</Button>
                  <Button variant="outline" className="w-full">Generate Reports</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default IoTServices;
