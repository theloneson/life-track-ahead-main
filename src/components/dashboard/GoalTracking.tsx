
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Goal = {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
};

type GoalTrackingProps = {
  goals: Goal[];
};

const GoalTracking = ({ goals }: GoalTrackingProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Goal Tracking</CardTitle>
        <CardDescription>Your progress toward your fitness goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => {
            const progress = Math.round((goal.current / goal.target) * 100);
            
            // Determine color based on progress
            let progressColor = "bg-blue-500";
            if (progress >= 100) progressColor = "bg-green-500";
            else if (progress < 25) progressColor = "bg-red-500";
            else if (progress < 50) progressColor = "bg-yellow-500";
            
            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{goal.name}</span>
                  <span className="text-sm text-gray-500">
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                </div>
                <Progress 
                  value={progress > 100 ? 100 : progress}
                  className={cn("h-2", "bg-gray-200")}
                  // Using a custom style approach with our utility-first CSS
                  style={{
                    "--progress-color": `var(--${progressColor.replace("bg-", "")})`,
                  } as React.CSSProperties}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracking;
