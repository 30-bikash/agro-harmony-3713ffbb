
import MainLayout from "@/components/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CropMonitoring = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Crop Monitoring</h1>
          <p className="text-muted-foreground">
            Monitor your crops' health, growth, and development in real-time.
          </p>
        </div>
        
        <Tabs defaultValue="rice" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="rice">Rice</TabsTrigger>
            <TabsTrigger value="tea">Tea</TabsTrigger>
            <TabsTrigger value="jute">Jute</TabsTrigger>
            <TabsTrigger value="mustard">Mustard</TabsTrigger>
            <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
          </TabsList>
          <TabsContent value="rice" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Rice Crop Status</CardTitle>
                <CardDescription>Monitor health, growth stage, and predicted yield for your rice crops.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Rice crop monitoring data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tea" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tea Crop Status</CardTitle>
                <CardDescription>Monitor health, growth stage, and quality parameters for your tea plantation.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Tea crop monitoring data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="jute" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Jute Crop Status</CardTitle>
                <CardDescription>Monitor health, fiber quality, and growth parameters for your jute crops.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Jute crop monitoring data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mustard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Mustard Crop Status</CardTitle>
                <CardDescription>Monitor health, oil content, and growth parameters for your mustard crops.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Mustard crop monitoring data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vegetables" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Vegetables Status</CardTitle>
                <CardDescription>Monitor health, growth stage, and quality for your vegetable crops.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted/30 rounded-lg border border-dashed">
                  <p className="text-muted-foreground">Vegetable crop monitoring data will be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default CropMonitoring;
