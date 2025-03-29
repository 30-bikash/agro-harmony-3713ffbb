
import React from "react";
import MainLayout from "@/components/MainLayout";
import SettingsTabs from "@/components/settings/SettingsTabs";

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account, farm, and application preferences.
          </p>
        </div>
        
        <SettingsTabs />
      </div>
    </MainLayout>
  );
};

export default Settings;
