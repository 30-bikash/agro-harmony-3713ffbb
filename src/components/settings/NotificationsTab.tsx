
import React from "react";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const NotificationsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>
          Manage how and when you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Weather Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Receive alerts about significant weather changes
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Pest Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Get notifications about pest threats and outbreaks
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Marketplace Activity</h3>
              <p className="text-sm text-muted-foreground">
                Receive updates on orders, inquiries, and market prices
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">System Updates</h3>
              <p className="text-sm text-muted-foreground">
                Get notified about new features and system improvements
              </p>
            </div>
            <Switch />
          </div>
        </div>
        
        <Button>Save Notification Preferences</Button>
      </CardContent>
    </Card>
  );
};

export default NotificationsTab;
