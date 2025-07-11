
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
}

interface GoalsProgressProps {
  goals: Goal[];
}

const GoalsProgress = ({ goals }: GoalsProgressProps) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Goals Progress</CardTitle>
        <Trophy className="h-5 w-5 text-yellow-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => {
            const percentage = Math.min(Math.round((goal.current / goal.target) * 100), 100);
            let progressColor;
            
            if (percentage < 30) progressColor = 'var(--red-500)';
            else if (percentage < 70) progressColor = 'var(--orange-500)';
            else progressColor = 'var(--primary)';
            
            return (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{goal.name}</span>
                  <span className="text-muted-foreground">
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                </div>
                <Progress 
                  value={percentage} 
                  className="h-2"
                  style={{ 
                    '--progress-color': progressColor 
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

export default GoalsProgress;
