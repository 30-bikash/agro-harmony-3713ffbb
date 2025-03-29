
import React from "react";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FarmDetailsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Farm Details</CardTitle>
        <CardDescription>
          Information about your farm and agricultural activities.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="farmName">Farm Name</Label>
          <Input id="farmName" placeholder="Your farm's name" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="farmLocation">Farm Location</Label>
            <Input id="farmLocation" placeholder="District, Village" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="farmSize">Farm Size (Hectares)</Label>
            <Input id="farmSize" type="number" placeholder="Farm size in hectares" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="primaryCrops">Primary Crops</Label>
          <Input id="primaryCrops" placeholder="e.g., Rice, Tea, Vegetables" />
        </div>
        
        <Button>Save Farm Details</Button>
      </CardContent>
    </Card>
  );
};

export default FarmDetailsTab;
