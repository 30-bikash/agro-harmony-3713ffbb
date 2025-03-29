
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon,
  trend,
  trendValue,
  className,
}: StatCardProps) => {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <div>
          <p className="stat-title">{title}</p>
          <p className="stat-value">{value}</p>
          {description && <p className="stat-description">{description}</p>}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      
      {trend && (
        <div className="mt-3 flex items-center text-xs">
          <span
            className={cn(
              "inline-flex items-center px-1.5 py-0.5 rounded-full font-medium",
              trend === "up" && "text-green-700 bg-green-100",
              trend === "down" && "text-red-700 bg-red-100",
              trend === "neutral" && "text-blue-700 bg-blue-100"
            )}
          >
            {trend === "up" && "▲"}
            {trend === "down" && "▼"}
            {trend === "neutral" && "●"}
            {trendValue}
          </span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
