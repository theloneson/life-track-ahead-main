export const mockUserData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatarUrl: "",
  stats: {
    workoutsThisWeek: 4,
    caloriesBurned: 2350,
    activeMinutes: 185,
    streakDays: 7
  },
  activityData: {
    steps: [
      { date: "Mon", value: 7500 },
      { date: "Tue", value: 8200 },
      { date: "Wed", value: 7800 },
      { date: "Thu", value: 9500 },
      { date: "Fri", value: 8700 },
      { date: "Sat", value: 6500 },
      { date: "Sun", value: 5200 }
    ],
    workouts: [
      { date: "Mon", value: 1, duration: 45 },
      { date: "Tue", value: 1, duration: 60 },
      { date: "Wed", value: 0, duration: 0 },
      { date: "Thu", value: 1, duration: 30 },
      { date: "Fri", value: 1, duration: 75 },
      { date: "Sat", value: 0, duration: 0 },
      { date: "Sun", value: 0, duration: 0 }
    ],
    calories: [
      { date: "Mon", value: 350 },
      { date: "Tue", value: 420 },
      { date: "Wed", value: 280 },
      { date: "Thu", value: 310 },
      { date: "Fri", value: 450 },
      { date: "Sat", value: 280 },
      { date: "Sun", value: 260 }
    ]
  },
  goals: [
    { id: "1", name: "Daily Steps", target: 10000, current: 8500, unit: "steps" },
    { id: "2", name: "Weekly Workouts", target: 5, current: 4, unit: "workouts" },
    { id: "3", name: "Weight Loss", target: 10, current: 4.5, unit: "lbs" },
    { id: "4", name: "Protein Intake", target: 150, current: 130, unit: "g" }
  ],
  nutrition: {
    caloriesConsumed: 1850,
    caloriesGoal: 2200,
    macros: [
      { name: "Protein", value: 35, color: "#8884d8" },
      { name: "Carbs", value: 45, color: "#82ca9d" },
      { name: "Fat", value: 20, color: "#ffc658" }
    ]
  },
  schedule: [
    { id: "1", day: "Mon", type: "Strength", time: "6:00 AM", completed: true },
    { id: "2", day: "Tue", type: "Cardio", time: "5:30 PM", completed: true },
    { id: "3", day: "Thu", type: "HIIT", time: "6:00 AM", completed: true },
    { id: "4", day: "Fri", type: "Yoga", time: "5:00 PM", completed: true },
    { id: "5", day: "Sun", type: "Rest", time: "All day", completed: false }
  ],
  progress: {
    weight: [
      { date: "Jan", value: 180 },
      { date: "Feb", value: 178 },
      { date: "Mar", value: 176 },
      { date: "Apr", value: 173 },
      { date: "May", value: 171 },
      { date: "Jun", value: 170 }
    ],
    bodyFat: [
      { date: "Jan", value: 22 },
      { date: "Feb", value: 21 },
      { date: "Mar", value: 20.5 },
      { date: "Apr", value: 19.8 },
      { date: "May", value: 19 },
      { date: "Jun", value: 18.5 }
    ],
    strength: [
      { date: "Jan", value: 180 },
      { date: "Feb", value: 190 },
      { date: "Mar", value: 200 },
      { date: "Apr", value: 210 },
      { date: "May", value: 215 },
      { date: "Jun", value: 225 }
    ]
  },
  recentActivities: [
    {
      id: "1",
      type: "Strength",
      title: "Upper Body Workout",
      time: "Today, 6:30 AM",
      duration: "45 min",
      calories: 320
    },
    {
      id: "2",
      type: "Run",
      title: "Morning Run",
      time: "Yesterday, 7:00 AM",
      duration: "32 min",
      distance: "5.2 km",
      calories: 280
    },
    {
      id: "3",
      type: "Yoga",
      title: "Flexibility & Balance",
      time: "Yesterday, 5:30 PM",
      duration: "60 min",
      calories: 180
    },
    {
      id: "4",
      type: "HIIT",
      title: "High Intensity Circuit",
      time: "Mar 12, 6:00 PM",
      duration: "25 min",
      calories: 380
    }
  ]
};

export const generateWorkouts = () => {
  const workouts = [...mockUserData.recentActivities];
  const types = ["Strength", "Run", "Yoga", "HIIT", "Cycling", "Swimming"];
  const titles = {
    Strength: ["Upper Body Focus", "Leg Day", "Full Body Strength", "Core Workout", "Back & Biceps"],
    Run: ["Morning Run", "Interval Run", "Long Distance", "Recovery Run", "Hill Sprint"],
    Yoga: ["Flexibility & Balance", "Morning Flow", "Power Yoga", "Recovery Session", "Meditation Yoga"],
    HIIT: ["Full Body Circuit", "Tabata Session", "EMOM Workout", "Cardio Blast", "High Intensity Intervals"],
    Cycling: ["Outdoor Ride", "Indoor Cycling", "Interval Cycling", "Hill Climb", "Recovery Ride"],
    Swimming: ["Freestyle Session", "Mixed Strokes", "Sprint Work", "Endurance Swim", "Technique Focus"]
  };
  
  for (let i = 0; i < 15; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const titleList = titles[type as keyof typeof titles] || titles.Strength;
    const title = titleList[Math.floor(Math.random() * titleList.length)];
    const duration = `${Math.floor(Math.random() * 60) + 15} min`;
    const calories = Math.floor(Math.random() * 400) + 100;
    const distance = type === "Run" || type === "Cycling" ? `${(Math.random() * 10).toFixed(1)} km` : undefined;
    
    const date = new Date();
    date.setDate(date.getDate() - (i + 5));
    const formattedDate = `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getDate()}`;
    const time = `${formattedDate}, ${Math.floor(Math.random() * 12) + 5}:${Math.random() > 0.5 ? '30' : '00'} ${Math.random() > 0.5 ? 'AM' : 'PM'}`;
    
    workouts.push({
      id: `workout-${workouts.length + 1}`,
      type,
      title,
      time,
      duration,
      calories,
      distance,
    });
  }
  
  return workouts;
};
