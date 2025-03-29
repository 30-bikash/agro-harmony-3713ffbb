
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cloud, Thermometer, Droplets, Wind, Sprout } from "lucide-react";

const WeatherSoil = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Weather & Soil</h1>
          <p className="text-muted-foreground">
            Monitor weather patterns and soil conditions for optimal farming decisions.
          </p>
        </div>
        
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Conditions</TabsTrigger>
            <TabsTrigger value="forecast">5-Day Forecast</TabsTrigger>
            <TabsTrigger value="soil">Soil Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-agro-blue" />
                    Current Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-6xl font-bold">28°C</div>
                    <div className="text-xl">Partly Cloudy</div>
                    <div className="grid grid-cols-3 gap-6 w-full mt-4">
                      <div className="flex flex-col items-center">
                        <Thermometer className="h-6 w-6 text-agro-brown mb-1" />
                        <div className="text-sm font-medium">Feels like</div>
                        <div className="text-sm">31°C</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <Droplets className="h-6 w-6 text-agro-blue mb-1" />
                        <div className="text-sm font-medium">Humidity</div>
                        <div className="text-sm">78%</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <Wind className="h-6 w-6 text-muted-foreground mb-1" />
                        <div className="text-sm font-medium">Wind</div>
                        <div className="text-sm">8 km/h</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sprout className="h-5 w-5 text-agro-green-dark" />
                    Farming Advisory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="pb-4 border-b">
                      <h3 className="font-medium">Weather Impact on Crops</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Current conditions are favorable for rice and tea cultivation. High humidity may increase disease risk in vegetables.
                      </p>
                    </div>
                    <div className="pb-4 border-b">
                      <h3 className="font-medium">Recommended Actions</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Consider preventative fungicide application for vegetable crops.
                        Optimal conditions for fertilizer application in rice fields.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Irrigation Needs</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Low irrigation needs for next 48 hours due to expected rainfall.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Rainfall Probability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-60 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Rainfall probability chart will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forecast" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>5-Day Weather Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Weather forecast data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="soil" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Soil Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Soil analysis data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default WeatherSoil;
