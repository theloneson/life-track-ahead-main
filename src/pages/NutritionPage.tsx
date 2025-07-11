
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { 
  Apple,
  Plus,
  Search,
  Filter,
  ChevronDown,
  Utensils,
  Coffee,
  Salad
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const NutritionPage = () => {
  const [mealFilter, setMealFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock nutrition data
  const nutritionSummary = {
    caloriesConsumed: 1850,
    caloriesGoal: 2200,
    proteinConsumed: 130,
    proteinGoal: 150,
    carbsConsumed: 180,
    carbsGoal: 220,
    fatConsumed: 60,
    fatGoal: 70,
  };

  const macrosData = [
    { name: "Protein", value: 130, color: "#8884d8", goal: 150 },
    { name: "Carbs", value: 180, color: "#82ca9d", goal: 220 },
    { name: "Fat", value: 60, color: "#ffc658", goal: 70 },
  ];

  // Mock meal log data
  const meals = [
    {
      id: "1",
      type: "Breakfast",
      time: "7:30 AM",
      name: "Greek Yogurt with Berries and Granola",
      calories: 350,
      protein: 24,
      carbs: 42,
      fat: 10,
      items: ["Greek Yogurt (1 cup)", "Mixed Berries (1/2 cup)", "Granola (1/4 cup)", "Honey (1 tsp)"]
    },
    {
      id: "2",
      type: "Snack",
      time: "10:00 AM",
      name: "Protein Shake",
      calories: 180,
      protein: 30,
      carbs: 5,
      fat: 3,
      items: ["Protein Powder (1 scoop)", "Almond Milk (1 cup)", "Banana (1/2)"]
    },
    {
      id: "3",
      type: "Lunch",
      time: "12:30 PM",
      name: "Grilled Chicken Salad",
      calories: 520,
      protein: 40,
      carbs: 35,
      fat: 22,
      items: ["Grilled Chicken Breast (6 oz)", "Mixed Greens (2 cups)", "Cherry Tomatoes (1/2 cup)", "Cucumber (1/2)", "Avocado (1/4)", "Balsamic Vinaigrette (2 tbsp)"]
    },
    {
      id: "4",
      type: "Snack",
      time: "3:30 PM",
      name: "Apple with Almond Butter",
      calories: 220,
      protein: 6,
      carbs: 30,
      fat: 12,
      items: ["Apple (1 medium)", "Almond Butter (2 tbsp)"]
    },
    {
      id: "5",
      type: "Dinner",
      time: "7:00 PM",
      name: "Salmon with Quinoa and Roasted Vegetables",
      calories: 580,
      protein: 30,
      carbs: 68,
      fat: 13,
      items: ["Salmon Fillet (5 oz)", "Quinoa (1 cup cooked)", "Broccoli (1 cup)", "Bell Peppers (1/2 cup)", "Olive Oil (1 tbsp)", "Lemon (1/4)"]
    },
  ];

  const nutritionLog = [
    { day: "Mon", calories: 2100, protein: 145, carbs: 210, fat: 65 },
    { day: "Tue", calories: 1950, protein: 140, carbs: 190, fat: 62 },
    { day: "Wed", calories: 2050, protein: 135, carbs: 200, fat: 68 },
    { day: "Thu", calories: 1850, protein: 130, carbs: 180, fat: 60 },
    { day: "Fri", calories: 1900, protein: 128, carbs: 185, fat: 63 },
    { day: "Sat", calories: 2200, protein: 150, carbs: 220, fat: 70 },
    { day: "Sun", calories: 2000, protein: 142, carbs: 195, fat: 66 },
  ];

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack"];

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = mealFilter.length === 0 || mealFilter.includes(meal.type);
    return matchesSearch && matchesType;
  });

  const getMealIcon = (type: string) => {
    switch (type) {
      case 'Breakfast':
        return <Coffee className="h-4 w-4" />;
      case 'Lunch':
        return <Utensils className="h-4 w-4" />;
      case 'Dinner':
        return <Utensils className="h-4 w-4" />;
      case 'Snack':
        return <Apple className="h-4 w-4" />;
      default:
        return <Salad className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Nutrition</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Log Food
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Daily Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Calories</span>
                      <span className="text-sm">{nutritionSummary.caloriesConsumed} / {nutritionSummary.caloriesGoal}</span>
                    </div>
                    <Progress value={(nutritionSummary.caloriesConsumed / nutritionSummary.caloriesGoal) * 100} />
                    <p className="text-xs text-muted-foreground mt-1">
                      {nutritionSummary.caloriesGoal - nutritionSummary.caloriesConsumed} calories remaining
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Protein</span>
                      <span className="text-sm">{nutritionSummary.proteinConsumed} / {nutritionSummary.proteinGoal}g</span>
                    </div>
                    <Progress 
                      value={(nutritionSummary.proteinConsumed / nutritionSummary.proteinGoal) * 100}
                      className="bg-accent/30"
                      style={{ 
                        '--progress-color': '#8884d8' 
                      } as React.CSSProperties}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Carbs</span>
                      <span className="text-sm">{nutritionSummary.carbsConsumed} / {nutritionSummary.carbsGoal}g</span>
                    </div>
                    <Progress 
                      value={(nutritionSummary.carbsConsumed / nutritionSummary.carbsGoal) * 100}
                      className="bg-accent/30"
                      style={{ 
                        '--progress-color': '#82ca9d' 
                      } as React.CSSProperties}
                    />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Fat</span>
                      <span className="text-sm">{nutritionSummary.fatConsumed} / {nutritionSummary.fatGoal}g</span>
                    </div>
                    <Progress 
                      value={(nutritionSummary.fatConsumed / nutritionSummary.fatGoal) * 100}
                      className="bg-accent/30"
                      style={{ 
                        '--progress-color': '#ffc658' 
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
                
                <div className="h-60 md:h-auto md:col-span-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={macrosData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}g`}
                        labelLine={false}
                      >
                        {macrosData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Legend 
                        layout="vertical" 
                        verticalAlign="middle" 
                        align="right"
                        formatter={(value) => <span className="text-sm">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="calories">
                <TabsList className="w-full">
                  <TabsTrigger value="calories">Calories</TabsTrigger>
                  <TabsTrigger value="macros">Macros</TabsTrigger>
                </TabsList>
                
                <TabsContent value="calories" className="pt-4">
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={nutritionLog}
                        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Bar dataKey="calories" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                
                <TabsContent value="macros" className="pt-4">
                  <div className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={nutritionLog}
                        margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Bar dataKey="protein" stackId="a" name="Protein" fill="#8884d8" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="carbs" stackId="a" name="Carbs" fill="#82ca9d" radius={[0, 0, 0, 0]} />
                        <Bar dataKey="fat" stackId="a" name="Fat" fill="#ffc658" radius={[0, 0, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0">
          <CardTitle>Today's Food Log</CardTitle>
          <div className="flex gap-2">
            <div className="flex-1 sm:w-[200px] relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search meals..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[130px] justify-start">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>Filter</span>
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                {mealTypes.map((type) => (
                  <DropdownMenuCheckboxItem
                    key={type}
                    checked={mealFilter.includes(type)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setMealFilter([...mealFilter, type]);
                      } else {
                        setMealFilter(mealFilter.filter((t) => t !== type));
                      }
                    }}
                  >
                    {type}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {filteredMeals.length > 0 ? (
              filteredMeals.map((meal) => (
                <div key={meal.id} className="p-4 hover:bg-accent/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className={`rounded-full p-2 mr-3 bg-primary/10 text-primary`}>
                        {getMealIcon(meal.type)}
                      </div>
                      <div>
                        <h4 className="font-medium">{meal.name}</h4>
                        <div className="flex items-center text-xs text-muted-foreground">
                          {meal.type} • {meal.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{meal.calories} cal</div>
                      <div className="text-xs text-muted-foreground">
                        P: {meal.protein}g • C: {meal.carbs}g • F: {meal.fat}g
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <ul className="list-disc pl-8">
                      {meal.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-muted-foreground">
                No meals found. Try adjusting your filters or search term.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NutritionPage;
