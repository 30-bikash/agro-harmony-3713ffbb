
import { AlertCircle } from "lucide-react";

const PestAlertWidget = () => {
  return (
    <div className="stat-card border-l-4 border-l-amber-500">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-amber-100 text-amber-700 rounded-full">
          <AlertCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">Pest Alert</h3>
          <p className="text-sm text-muted-foreground">Rice Stem Borer detected nearby</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-3">
        <div className="text-sm bg-amber-50 text-amber-700 px-2 py-1 rounded">
          Medium Risk
        </div>
        <button className="text-sm text-agro-green-dark hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PestAlertWidget;
