
import React from "react";
import MainLayout from "@/components/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IoTHeader from "@/components/iot/IoTHeader";
import IoTDashboard from "@/components/iot/IoTDashboard";
import IoTDevices from "@/components/iot/IoTDevices";
import IoTPricing from "@/components/iot/IoTPricing";
import IoTTestimonials from "@/components/iot/IoTTestimonials";

const IoTServices = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <IoTHeader />
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6 space-y-6">
            <IoTDashboard />
          </TabsContent>
          
          <TabsContent value="devices" className="mt-6">
            <IoTDevices />
          </TabsContent>
          
          <TabsContent value="pricing" className="mt-6">
            <IoTPricing />
          </TabsContent>
          
          <TabsContent value="testimonials" className="mt-6">
            <IoTTestimonials />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default IoTServices;
