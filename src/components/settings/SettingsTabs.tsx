
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileTab from "./ProfileTab";
import FarmDetailsTab from "./FarmDetailsTab";
import NotificationsTab from "./NotificationsTab";
import PreferencesTab from "./PreferencesTab";

const SettingsTabs = () => {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="farm">Farm Details</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="preferences">Preferences</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile" className="mt-6">
        <ProfileTab />
      </TabsContent>
      
      <TabsContent value="farm" className="mt-6">
        <FarmDetailsTab />
      </TabsContent>
      
      <TabsContent value="notifications" className="mt-6">
        <NotificationsTab />
      </TabsContent>
      
      <TabsContent value="preferences" className="mt-6">
        <PreferencesTab />
      </TabsContent>
    </Tabs>
  );
};

export default SettingsTabs;
