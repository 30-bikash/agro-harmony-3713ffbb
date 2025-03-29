
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Upload, Search } from "lucide-react";

const PestDetection = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pest Detection</h1>
          <p className="text-muted-foreground">
            Identify and manage pests and diseases in your crops.
          </p>
        </div>
        
        <Tabs defaultValue="detect" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="detect">Detect Pests</TabsTrigger>
            <TabsTrigger value="alerts">Pest Alerts</TabsTrigger>
            <TabsTrigger value="library">Pest Library</TabsTrigger>
          </TabsList>
          
          <TabsContent value="detect" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Image for Pest Detection</CardTitle>
                <CardDescription>
                  Upload an image of your crop to identify pests and diseases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg bg-muted/30">
                  <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center mb-4">
                    <span className="font-medium">Click to upload</span> or drag and drop
                    <br />
                    <span className="text-sm text-muted-foreground">
                      Supported formats: JPG, PNG, HEIC
                    </span>
                  </p>
                  <Button className="mb-2">Upload Image</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="alerts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Pest Alerts</CardTitle>
                <CardDescription>
                  Current pest risks in your area based on weather, seasonal patterns, and nearby detections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pestAlerts.map((alert, index) => (
                    <div key={index} className={`p-4 border-l-4 rounded-r-lg border-l-${alert.riskColor} bg-${alert.riskColor}/10`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2 bg-${alert.riskColor}/20 text-${alert.riskColor} rounded-full`}>
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{alert.pest}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full bg-${alert.riskColor}/20 text-${alert.riskColor}`}>
                              {alert.riskLevel} Risk
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {alert.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">
                              Affected crop: {alert.crop}
                            </span>
                            <Button variant="link" size="sm" className="p-0 h-auto">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="library" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pest & Disease Library</CardTitle>
                <CardDescription>
                  Search and learn about common pests and diseases affecting crops in Assam.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Search for pests or diseases" 
                    className="w-full pl-10 pr-4 py-2 border rounded-md"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pestLibrary.map((pest, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                      <div className="h-32 bg-muted/30 flex items-center justify-center">
                        <p className="text-muted-foreground">Pest Image</p>
                      </div>
                      <div className="p-3">
                        <h4 className="font-medium">{pest.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          Scientific name: <i>{pest.scientificName}</i>
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {pest.description}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted">
                            {pest.affectedCrops.join(', ')}
                          </span>
                          <Button variant="link" size="sm" className="p-0 h-auto">
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

const pestAlerts = [
  {
    pest: "Rice Stem Borer",
    riskLevel: "Medium",
    riskColor: "amber",
    description: "Detected in farms 5km north of your location. Weather conditions are favorable for spread.",
    crop: "Rice"
  },
  {
    pest: "Tea Mosquito Bug",
    riskLevel: "High",
    riskColor: "red",
    description: "Active infestation reported in neighboring tea gardens. Immediate inspection recommended.",
    crop: "Tea"
  },
  {
    pest: "Jute Anthracnose",
    riskLevel: "Low",
    riskColor: "green",
    description: "Seasonal risk due to recent rainfall, but no active cases reported nearby.",
    crop: "Jute"
  }
];

const pestLibrary = [
  {
    name: "Rice Stem Borer",
    scientificName: "Scirpophaga incertulas",
    description: "A serious rice pest that bores into stems, causing withering of the central leaf shoot.",
    affectedCrops: ["Rice"]
  },
  {
    name: "Tea Mosquito Bug",
    scientificName: "Helopeltis theivora",
    description: "Sucks sap from tender leaves and shoots, causing them to wither and drop.",
    affectedCrops: ["Tea"]
  },
  {
    name: "Jute Anthracnose",
    scientificName: "Colletotrichum corchorum",
    description: "Fungal disease causing dark brown lesions on stems and leaves of jute plants.",
    affectedCrops: ["Jute"]
  },
  {
    name: "Mustard Aphid",
    scientificName: "Lipaphis erysimi",
    description: "Small sap-sucking insects that cause yellowing and curling of mustard leaves.",
    affectedCrops: ["Mustard"]
  },
  {
    name: "Brinjal Fruit Borer",
    scientificName: "Leucinodes orbonalis",
    description: "Larvae bore into fruits and feed on the pulp, making them unsuitable for market.",
    affectedCrops: ["Vegetables", "Brinjal"]
  },
  {
    name: "Rice Blast",
    scientificName: "Magnaporthe oryzae",
    description: "Fungal disease causing lesions on leaves, necks and panicles of rice plants.",
    affectedCrops: ["Rice"]
  }
];

export default PestDetection;
