
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Workout = {
  id: string;
  day: string;
  type: string;
  time: string;
  completed: boolean;
};

type WeeklyCalendarProps = {
  workouts: Workout[];
};

const WeeklyCalendar = ({ workouts }: WeeklyCalendarProps) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const today = new Date();
  const currentDay = today.getDay(); // 0 for Sunday, 1 for Monday, etc.
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Weekly Schedule</CardTitle>
        <CardDescription>Your workout plan for the week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <div 
              key={day} 
              className={`text-center p-1.5 rounded-full ${
                index === currentDay 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-600"
              }`}
            >
              {day}
            </div>
          ))}
          
          {days.map((day, index) => {
            const dayWorkouts = workouts.filter(
              (workout) => workout.day.toLowerCase() === day.toLowerCase()
            );
            
            return (
              <div 
                key={`workouts-${day}`}
                className={`h-20 border rounded-lg p-1 ${
                  index === currentDay ? "border-blue-400" : "border-gray-200"
                }`}
              >
                {dayWorkouts.length > 0 ? (
                  <div className="h-full overflow-y-auto text-xs">
                    {dayWorkouts.map((workout) => (
                      <div
                        key={workout.id}
                        className={`mb-1 p-1 rounded ${
                          workout.completed
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <div className="font-medium">{workout.type}</div>
                        <div>{workout.time}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-xs text-gray-400">
                    Rest Day
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyCalendar;
