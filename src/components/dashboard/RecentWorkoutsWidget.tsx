
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, ChevronRight, Dumbbell, Activity, Smile } from "lucide-react";

interface Workout {
  id: string;
  type: string;
  title: string;
  time: string;
  duration: string;
  calories?: number;
  distance?: string;
}

interface RecentWorkoutsWidgetProps {
  workouts: Workout[];
}

const RecentWorkoutsWidget = ({ workouts }: RecentWorkoutsWidgetProps) => {
  const getWorkoutIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'run':
        return <Activity className="h-4 w-4" />;
      case 'yoga':
        return <Smile className="h-4 w-4" />;
      default:
        return <Dumbbell className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Recent Workouts</CardTitle>
        <button className="text-sm text-primary flex items-center">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {workouts.slice(0, 3).map((workout) => (
            <div 
              key={workout.id}
              className="flex items-center justify-between p-3 bg-card hover:bg-accent/10 rounded-lg border border-border transition-colors"
            >
              <div className="flex items-center">
                <div className={`rounded-full p-2 mr-3 bg-primary/10 text-primary`}>
                  {getWorkoutIcon(workout.type)}
                </div>
                <div>
                  <h4 className="font-medium">{workout.title}</h4>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <CalendarClock className="h-3 w-3 mr-1" />
                    {workout.time}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{workout.duration}</div>
                <div className="text-xs text-muted-foreground">
                  {workout.calories ? `${workout.calories} cal` : ''}
                  {workout.distance ? ` • ${workout.distance}` : ''}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentWorkoutsWidget;
