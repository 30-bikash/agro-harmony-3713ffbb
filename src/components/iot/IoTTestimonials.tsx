
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const IoTTestimonials = () => {
  return (
    <>
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
    </>
  );
};

export default IoTTestimonials;
