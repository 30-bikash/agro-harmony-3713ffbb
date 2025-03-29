
import { ReactNode } from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-muted/30">
      <MobileNavigation />
      
      <div className="flex gap-6 p-4 max-w-7xl mx-auto">
        <aside className="w-64 hidden md:block">
          <Navigation />
        </aside>
        
        <main className="flex-1 pt-2 md:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
