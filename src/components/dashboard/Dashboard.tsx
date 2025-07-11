
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../layout/Navbar";
import WelcomeSection from "./WelcomeSection";
import ActivitySummary from "./ActivitySummary";
import GoalTracking from "./GoalTracking";
import WeeklyCalendar from "./WeeklyCalendar";
import NutritionSummary from "./NutritionSummary";
import ProgressOverview from "./ProgressOverview";
import RecentActivity from "./RecentActivity";
import { mockUserData } from "../../data/mockData";

const Dashboard = () => {
  console.log("Dashboard rendering");
  const { toast } = useToast();
  const [user, setUser] = useState(mockUserData);
  
  // Add a dummy toggleSidebar function since we're not actually toggling a sidebar here
  const toggleSidebar = () => {
    console.log("Toggle sidebar called from Dashboard component");
  };

  console.log("User data:", user);

  // Load user data - in a real app, this would fetch from an API
  useState(() => {
    console.log("Dashboard effect running");
    toast({
      title: "Welcome back!",
      description: "Your dashboard has been updated with the latest data.",
    });
  });

  if (!user) {
    console.log("No user data available");
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <main className="container mx-auto px-4 py-8">
        <WelcomeSection user={user} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ActivitySummary stats={user.stats} />
          <GoalTracking goals={user.goals} />
          <NutritionSummary nutrition={user.nutrition} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <WeeklyCalendar workouts={user.schedule} />
          <ProgressOverview progress={user.progress} />
        </div>
        
        <div className="mt-6">
          <RecentActivity activities={user.recentActivities} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
