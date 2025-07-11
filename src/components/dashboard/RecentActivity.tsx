
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Activity = {
  id: string;
  type: string;
  title: string;
  time: string;
  duration?: string;
  distance?: string;
  calories?: number;
};

type RecentActivityProps = {
  activities: Activity[];
};

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest workout sessions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Badge className="h-10 w-10 rounded-full flex items-center justify-center">
                  {activity.type.charAt(0)}
                </Badge>
                <div>
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
              <div className="hidden sm:flex space-x-4 text-sm">
                {activity.duration && (
                  <div className="text-right">
                    <p className="font-medium">{activity.duration}</p>
                    <p className="text-xs text-gray-500">Duration</p>
                  </div>
                )}
                {activity.distance && (
                  <div className="text-right">
                    <p className="font-medium">{activity.distance}</p>
                    <p className="text-xs text-gray-500">Distance</p>
                  </div>
                )}
                {activity.calories && (
                  <div className="text-right">
                    <p className="font-medium">{activity.calories}</p>
                    <p className="text-xs text-gray-500">Calories</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
