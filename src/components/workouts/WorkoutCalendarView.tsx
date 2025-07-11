
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const WorkoutCalendarView = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
          <Calendar className="h-12 w-12 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Calendar View Coming Soon</h3>
          <p className="text-sm text-center max-w-md">
            Track your workouts on a calendar, see your progress over time, and plan future sessions. 
            We're working hard to bring you this feature!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCalendarView;
