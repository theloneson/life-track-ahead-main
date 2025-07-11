
import { Dumbbell, Activity, Smile } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WorkoutCardProps {
  workout: {
    id: string;
    type: string;
    title: string;
    time: string;
    duration: string;
    calories: number;
    distance?: string;
  };
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  const getWorkoutIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'run':
        return <Activity className="h-5 w-5" />;
      case 'yoga':
        return <Smile className="h-5 w-5" />;
      default:
        return <Dumbbell className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Strength':
        return 'bg-blue-500';
      case 'Run':
        return 'bg-green-500';
      case 'HIIT':
        return 'bg-red-500';
      case 'Yoga':
        return 'bg-purple-500';
      case 'Cycling':
        return 'bg-yellow-500';
      default:
        return 'bg-cyan-500';
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow group">
      <div className={`h-2 ${getTypeColor(workout.type)}`} />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{workout.title}</h3>
            <p className="text-sm text-muted-foreground">{workout.time}</p>
          </div>
          <div className={`rounded-full p-2 bg-primary/10 text-primary`}>
            {getWorkoutIcon(workout.type)}
          </div>
        </div>
        <div className="flex gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-medium">{workout.duration}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Calories</p>
            <p className="font-medium">{workout.calories}</p>
          </div>
          {workout.distance && (
            <div>
              <p className="text-muted-foreground">Distance</p>
              <p className="font-medium">{workout.distance}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
