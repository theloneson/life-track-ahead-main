
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

type WelcomeSectionProps = {
  user: {
    name: string;
    stats: {
      workoutsThisWeek: number;
      caloriesBurned: number;
      activeMinutes: number;
      streakDays: number;
    };
  };
};

const motivationalQuotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "No matter how slow you go, you're still lapping everyone on the couch.",
  "Strive for progress, not perfection.",
  "The difference between try and triumph is a little umph.",
];

const WelcomeSection = ({ user }: WelcomeSectionProps) => {
  const [quote, setQuote] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
    
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    setQuote(randomQuote);
  }, []);

  const firstName = userData ? userData.firstName : user.name.split(" ")[0];
  const { workoutsThisWeek, caloriesBurned, activeMinutes, streakDays } = user.stats;

  return (
    <section className="bg-white rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {firstName}!
          </h1>
          <p className="mt-2 text-gray-500 italic">"{quote}"</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <Badge variant="secondary" className="text-sm py-1 px-3">
            <span className="font-bold mr-1">{workoutsThisWeek}</span> workouts this week
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">
            <span className="font-bold mr-1">{caloriesBurned}</span> calories burned
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">
            <span className="font-bold mr-1">{activeMinutes}</span> active minutes
          </Badge>
          <Badge variant="secondary" className="text-sm py-1 px-3">
            <span className="font-bold mr-1">{streakDays}-day</span> streak
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
