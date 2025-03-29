
import React from "react";
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Activity, Thermometer, Gauge, Wifi, Droplets, Battery, Zap, Check, Star } from "lucide-react";

const IoTServices = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Affordable IoT Solutions for Smart Farming</h1>
          <p className="text-muted-foreground text-lg">
            Enhance your farm's productivity with our cost-effective IoT devices and sensors
          </p>
        </div>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6 space-y-6">
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
          </TabsContent>
          
          <TabsContent value="devices" className="mt-6">
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
          </TabsContent>
          
          <TabsContent value="pricing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-agro-green-pale/30 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-agro-green-dark text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Basic
                </div>
                <CardHeader>
                  <CardTitle>Starter Kit</CardTitle>
                  <CardDescription>
                    Perfect for small farms up to 2 acres
                  </CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">₹9,999</span>
                    <span className="text-muted-foreground ml-2 text-sm line-through">₹14,999</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>4 Soil Moisture Sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>2 Temperature Sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>1 Gateway Device</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>Mobile App Access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>3 Months Data Storage</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-agro-green-dark/70 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-agro-green-dark text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Standard Package</CardTitle>
                  <CardDescription>
                    Ideal for medium farms between 2-5 acres
                  </CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">₹18,499</span>
                    <span className="text-muted-foreground ml-2 text-sm line-through">₹24,999</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>8 Soil Moisture Sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>4 Temperature Sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>2 Smart Sprinkler Controllers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>1 Advanced Gateway</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>1 Power Monitoring Unit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>Mobile & Web App Access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>1 Year Data Storage</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-agro-green-dark hover:bg-agro-green-dark/90">Get Started</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-agro-green-pale/30 hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-agro-blue text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Advanced
                </div>
                <CardHeader>
                  <CardTitle>Premium Solution</CardTitle>
                  <CardDescription>
                    For large farms above 5 acres
                  </CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">₹29,999</span>
                    <span className="text-muted-foreground ml-2 text-sm line-through">₹39,999</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>15 Soil Moisture Sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>8 Temperature Sensors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>5 Smart Sprinkler Controllers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>2 Advanced Gateways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>3 Power Monitoring Units</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>Advanced Analytics Dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>2 Years Data Storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-agro-green-dark flex-shrink-0 mt-0.5" />
                      <span>Priority Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-8 bg-muted/50 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Custom Solutions Available</h3>
              <p className="text-muted-foreground mb-4">Need a tailored solution for your specific farm requirements? Contact our team for customized packages.</p>
              <Button variant="outline">Contact Sales Team</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="testimonials" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Ramesh Kumar</CardTitle>
                      <CardDescription>Tea Farmer, Dibrugarh, Assam</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img src="/placeholder.svg" alt="Tea plantation in Assam" className="rounded-md w-full h-48 object-cover" />
                  </div>
                  <p className="text-sm">
                    "I invested in the Standard Package for my tea plantation and the results have been outstanding. The soil moisture sensors helped me optimize irrigation, resulting in 30% water savings. The affordable price made it accessible for farmers like me. Highly recommended for tea growers in Assam!"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Priya Gogoi</CardTitle>
                      <CardDescription>Rice Farmer, Jorhat, Assam</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img src="/placeholder.svg" alt="Rice field in Assam" className="rounded-md w-full h-48 object-cover" />
                  </div>
                  <p className="text-sm">
                    "The Starter Kit was perfect for my small rice farm. The cost was reasonable and the installation was straightforward. I've seen a noticeable improvement in my crop yield, and the early detection of irrigation issues has saved me from potential losses. Great value for money!"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Binod Basumatary</CardTitle>
                      <CardDescription>Vegetable Farmer, Kokrajhar, Assam</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img src="/placeholder.svg" alt="Vegetable farm in Assam" className="rounded-md w-full h-48 object-cover" />
                  </div>
                  <p className="text-sm">
                    "I was hesitant about investing in technology for my farm, but the affordable pricing convinced me to try. The temperature sensors have been crucial for my vegetable crops, especially during unpredictable weather. The system paid for itself within one growing season through improved crop quality."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-agro-green-pale/30 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Farzana Begum</CardTitle>
                      <CardDescription>Mixed Crop Farmer, Nagaon, Assam</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img src="/placeholder.svg" alt="Mixed crop farm in Assam" className="rounded-md w-full h-48 object-cover" />
                  </div>
                  <p className="text-sm">
                    "As a woman farmer managing multiple crops, the Premium Solution has transformed how I run my farm. Despite the initial investment, the long-term savings on water, fertilizer, and labor have made it very cost-effective. The customer support team was very helpful with installation and training."
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-2">Join 500+ Satisfied Farmers Across Assam</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Our affordable IoT solutions are helping farmers throughout Assam increase yields, reduce costs, and farm more sustainably.</p>
              <Button>Request a Demo</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default IoTServices;
