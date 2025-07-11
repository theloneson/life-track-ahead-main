
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";
import { mockUserData } from "@/data/mockData";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Award, Medal, Star, Trophy } from "lucide-react";

const ProgressPage = () => {
  const [period, setPeriod] = useState("6m");
  
  const badgesData = [
    { name: "Early Riser", description: "Complete 10 workouts before 8 AM", icon: <Star className="h-8 w-8 text-yellow-500" />, achieved: true },
    { name: "Strength Master", description: "Lift 1000 lbs total in a single workout", icon: <Trophy className="h-8 w-8 text-blue-500" />, achieved: true },
    { name: "Marathon Runner", description: "Run 26.2 miles in a single month", icon: <Award className="h-8 w-8 text-green-500" />, achieved: true },
    { name: "Century Club", description: "Complete 100 total workouts", icon: <Medal className="h-8 w-8 text-purple-500" />, achieved: false },
    { name: "Perfect Week", description: "Log workouts 7 days in a row", icon: <Star className="h-8 w-8 text-orange-500" />, achieved: true },
    { name: "Night Owl", description: "Complete 10 workouts after 8 PM", icon: <Trophy className="h-8 w-8 text-indigo-500" />, achieved: false }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Progress</h1>
      
      <Tabs defaultValue="body">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="body">Body Metrics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="body">
          <div className="space-y-6">
            <div className="flex gap-2 justify-end">
              <button 
                className={`px-3 py-1 rounded-md text-sm ${period === "1m" ? "bg-primary text-primary-foreground" : "bg-accent/50"}`}
                onClick={() => setPeriod("1m")}
              >
                1M
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${period === "3m" ? "bg-primary text-primary-foreground" : "bg-accent/50"}`}
                onClick={() => setPeriod("3m")}
              >
                3M
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${period === "6m" ? "bg-primary text-primary-foreground" : "bg-accent/50"}`}
                onClick={() => setPeriod("6m")}
              >
                6M
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${period === "1y" ? "bg-primary text-primary-foreground" : "bg-accent/50"}`}
                onClick={() => setPeriod("1y")}
              >
                1Y
              </button>
              <button 
                className={`px-3 py-1 rounded-md text-sm ${period === "all" ? "bg-primary text-primary-foreground" : "bg-accent/50"}`}
                onClick={() => setPeriod("all")}
              >
                All
              </button>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Weight Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={mockUserData.progress.weight}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#9b87f5"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Body Fat Percentage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={mockUserData.progress.bodyFat}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="date" />
                        <YAxis domain={['dataMin - 2', 'dataMax + 2']} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#F97316"
                          strokeWidth={3}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6, strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Body Measurements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: 'Jan', chest: 42, waist: 34, arms: 15 },
                          { name: 'Feb', chest: 42.5, waist: 33, arms: 15.2 },
                          { name: 'Mar', chest: 43, waist: 32.5, arms: 15.5 },
                          { name: 'Apr', chest: 43.2, waist: 32, arms: 15.8 },
                          { name: 'May', chest: 43.5, waist: 31, arms: 16 },
                          { name: 'Jun', chest: 44, waist: 30.5, arms: 16.2 },
                        ]}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="chest" name="Chest (in)" fill="#8884d8" />
                        <Bar dataKey="waist" name="Waist (in)" fill="#82ca9d" />
                        <Bar dataKey="arms" name="Arms (in)" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Strength Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={mockUserData.progress.strength}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 20', 'dataMax + 20']} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Bench Press (lbs)"
                        stroke="#9b87f5"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-1">Deadlift</h3>
                    <div className="text-3xl font-bold text-primary">315 lbs</div>
                    <p className="text-sm text-muted-foreground">Personal Record</p>
                    <div className="mt-4">
                      <div className="text-sm text-muted-foreground">Last 3 workouts</div>
                      <div className="flex justify-center gap-2 mt-2 text-sm">
                        <span className="px-2 py-1 bg-accent rounded-md">295 lbs</span>
                        <span className="px-2 py-1 bg-accent rounded-md">305 lbs</span>
                        <span className="px-2 py-1 bg-accent rounded-md">315 lbs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-1">Squat</h3>
                    <div className="text-3xl font-bold text-primary">275 lbs</div>
                    <p className="text-sm text-muted-foreground">Personal Record</p>
                    <div className="mt-4">
                      <div className="text-sm text-muted-foreground">Last 3 workouts</div>
                      <div className="flex justify-center gap-2 mt-2 text-sm">
                        <span className="px-2 py-1 bg-accent rounded-md">255 lbs</span>
                        <span className="px-2 py-1 bg-accent rounded-md">265 lbs</span>
                        <span className="px-2 py-1 bg-accent rounded-md">275 lbs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-1">5K Run</h3>
                    <div className="text-3xl font-bold text-primary">23:45</div>
                    <p className="text-sm text-muted-foreground">Personal Record</p>
                    <div className="mt-4">
                      <div className="text-sm text-muted-foreground">Last 3 runs</div>
                      <div className="flex justify-center gap-2 mt-2 text-sm">
                        <span className="px-2 py-1 bg-accent rounded-md">24:12</span>
                        <span className="px-2 py-1 bg-accent rounded-md">23:58</span>
                        <span className="px-2 py-1 bg-accent rounded-md">23:45</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Workout Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: 'Week 1', volume: 12500 },
                        { name: 'Week 2', volume: 13200 },
                        { name: 'Week 3', volume: 15000 },
                        { name: 'Week 4', volume: 14500 },
                        { name: 'Week 5', volume: 16200 },
                        { name: 'Week 6', volume: 17500 },
                        { name: 'Week 7', volume: 18200 },
                        { name: 'Week 8', volume: 19500 },
                      ]}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value} lbs`, 'Volume']} />
                      <Bar dataKey="volume" name="Workout Volume (lbs)" fill="#9b87f5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="achievements">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badgesData.map((badge, index) => (
                <Card key={index} className={badge.achieved ? "" : "opacity-50"}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4 p-4 bg-accent/30 rounded-full">
                      {badge.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{badge.description}</p>
                    <div className={`text-sm px-3 py-1 rounded-full ${badge.achieved ? "bg-green-500/20 text-green-600" : "bg-muted text-muted-foreground"}`}>
                      {badge.achieved ? "Achieved" : "Locked"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Milestone Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { date: "June 15, 2023", milestone: "First Workout", description: "Started your fitness journey" },
                    { date: "July 2, 2023", milestone: "First 5K Run", description: "Completed in 28:42" },
                    { date: "August 18, 2023", milestone: "100lb Bench Press", description: "Reached strength goal" },
                    { date: "September 5, 2023", milestone: "10 Workouts Streak", description: "Consistent dedication" },
                    { date: "October 10, 2023", milestone: "5% Body Fat Reduction", description: "From 22% to 17%" },
                    { date: "January 3, 2024", milestone: "50 Total Workouts", description: "Halfway to Century Club" },
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        {index < 5 && <div className="w-0.5 h-full bg-border"></div>}
                      </div>
                      <div className="pb-6">
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                        <div className="font-medium">{item.milestone}</div>
                        <div className="text-sm">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressPage;
