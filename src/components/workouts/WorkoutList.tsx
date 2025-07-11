
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Activity, Dumbbell, Smile } from "lucide-react";

interface WorkoutListProps {
  workouts: Array<{
    id: string;
    type: string;
    title: string;
    time: string;
    duration: string;
    calories: number;
    distance?: string;
  }>;
}

const WorkoutList = ({ workouts }: WorkoutListProps) => {
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
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Workout</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Calories</TableHead>
            <TableHead>Distance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workouts.map((workout) => (
            <TableRow key={workout.id} className="group hover:bg-accent/50">
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className={`rounded-full p-2 bg-primary/10 text-primary`}>
                    {getWorkoutIcon(workout.type)}
                  </div>
                  <div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {workout.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {workout.type}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{workout.time}</TableCell>
              <TableCell>{workout.duration}</TableCell>
              <TableCell>{workout.calories}</TableCell>
              <TableCell>{workout.distance || '-'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorkoutList;
