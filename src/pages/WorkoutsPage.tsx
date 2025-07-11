
import { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Plus, 
  ChevronDown, 
  SortAsc, 
  SortDesc 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WorkoutCard from "@/components/workouts/WorkoutCard";
import WorkoutList from "@/components/workouts/WorkoutList";
import WorkoutCalendarView from "@/components/workouts/WorkoutCalendarView";
import { generateWorkouts } from "@/data/mockData";

const WorkoutsPage = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    setWorkouts(generateWorkouts());
  }, []);

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch = workout.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         workout.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(workout.type);
    return matchesSearch && matchesType;
  });
  
  const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {
    const dateA = new Date(a.time.split(', ')[0] + ' ' + new Date().getFullYear());
    const dateB = new Date(b.time.split(', ')[0] + ' ' + new Date().getFullYear());
    return sortOrder === "desc" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime();
  });
  
  const workoutTypes = Array.from(new Set(workouts.map(workout => workout.type)));

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Workouts</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Workout
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex-1 flex relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            type="text" 
            placeholder="Search workouts..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[180px] justify-start">
                <Filter className="mr-2 h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              {workoutTypes.map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={selectedTypes.includes(type)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedTypes([...selectedTypes, type]);
                    } else {
                      setSelectedTypes(selectedTypes.filter((t) => t !== type));
                    }
                  }}
                >
                  {type}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            {sortOrder === "asc" ? (
              <SortAsc className="h-4 w-4" />
            ) : (
              <SortDesc className="h-4 w-4" />
            )}
          </Button>
          
          <Tabs value={viewMode} onValueChange={setViewMode} className="hidden sm:block">
            <TabsList>
              <TabsTrigger value="grid">Grid</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <Tabs value={viewMode} onValueChange={setViewMode}>
        <TabsContent value="grid" className="m-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="list" className="m-0">
          <WorkoutList workouts={sortedWorkouts} />
        </TabsContent>
        
        <TabsContent value="calendar" className="m-0">
          <WorkoutCalendarView />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkoutsPage;
