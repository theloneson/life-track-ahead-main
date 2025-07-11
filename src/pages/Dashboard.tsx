
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockUserData } from "@/data/mockData";
import { ChevronRight, Medal, TrendingUp, Clock, Award, BarChart, Dumbbell } from "lucide-react";
import { BarChart as RechartsBarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Cell } from "recharts";

import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import ActivitySummary from "@/components/dashboard/ActivitySummary";
import GoalsProgress from "@/components/dashboard/GoalsProgress";
import RecentWorkoutsWidget from "@/components/dashboard/RecentWorkoutsWidget";
import NutritionWidget from "@/components/dashboard/NutritionWidget";

const Dashboard = () => {
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  });

  const quote = "The only bad workout is the one that didn't happen.";
  
  return (
    <div className="space-y-6">
      <WelcomeBanner greeting={greeting} name={mockUserData.name} quote={quote} />
      
      <ActivitySummary stats={mockUserData.stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Weekly Activity</CardTitle>
              <button className="text-sm text-primary flex items-center">
                View Details <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={mockUserData.activityData.steps} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} />
                    <Tooltip 
                      formatter={(value: number) => [`${value.toLocaleString()} steps`, 'Steps']}
                      labelStyle={{ color: '#333' }}
                      contentStyle={{ borderRadius: '8px' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {mockUserData.activityData.steps.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.value > 8000 ? '#9b87f5' : '#d4d4d4'} 
                        />
                      ))}
                    </Bar>
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <GoalsProgress goals={mockUserData.goals} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentWorkoutsWidget workouts={mockUserData.recentActivities} />
        <NutritionWidget nutrition={mockUserData.nutrition} />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Medal, color: "bg-blue-500", title: "Achievements", value: "12 Earned", subtitle: "3 available" },
          { icon: TrendingUp, color: "bg-green-500", title: "Personal Records", value: "8 Broken", subtitle: "This month" },
          { icon: Clock, color: "bg-orange-500", title: "Workout Time", value: "15.5 hours", subtitle: "This month" },
          { icon: Award, color: "bg-purple-500", title: "Weekly Rank", value: "#6", subtitle: "Top 10%" }
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
