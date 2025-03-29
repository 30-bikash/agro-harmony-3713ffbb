
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const IoTPricing = () => {
  return (
    <>
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
    </>
  );
};

export default IoTPricing;
