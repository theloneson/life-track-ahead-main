
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Dumbbell, Flame, Timer } from "lucide-react";

interface ActivitySummaryProps {
  stats: {
    workoutsThisWeek: number;
    caloriesBurned: number;
    activeMinutes: number;
    streakDays: number;
  };
}

const ActivitySummary = ({ stats }: ActivitySummaryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-primary/20 p-3 rounded-full text-primary">
            <Dumbbell className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-muted-foreground">Workouts</p>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold mr-1">{stats.workoutsThisWeek}</span>
              <span className="text-sm text-muted-foreground">this week</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-orange-500/20 p-3 rounded-full text-orange-500">
            <Flame className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-muted-foreground">Calories Burned</p>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold mr-1">{stats.caloriesBurned}</span>
              <span className="text-sm text-muted-foreground">kcal</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-green-500/20 p-3 rounded-full text-green-500">
            <Timer className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-muted-foreground">Active Time</p>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold mr-1">{stats.activeMinutes}</span>
              <span className="text-sm text-muted-foreground">minutes</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center p-6">
          <div className="bg-blue-500/20 p-3 rounded-full text-blue-500">
            <Activity className="h-6 w-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold mr-1">{stats.streakDays}</span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivitySummary;
