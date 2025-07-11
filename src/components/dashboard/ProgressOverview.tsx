
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProgressOverviewProps = {
  progress: {
    weight: { date: string; value: number }[];
    bodyFat: { date: string; value: number }[];
    strength: { date: string; value: number }[];
  };
};

const ProgressOverview = ({ progress }: ProgressOverviewProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Progress Overview</CardTitle>
        <CardDescription>Track your improvement over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weight">
          <TabsList className="mb-4 grid grid-cols-3 gap-2">
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="bodyFat">Body Fat %</TabsTrigger>
            <TabsTrigger value="strength">Strength</TabsTrigger>
          </TabsList>
          
          <TabsContent value="weight">
            <ResponsiveContainer width="100%" height={225}>
              <LineChart data={progress.weight}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" fontSize={12} tickMargin={10} />
                <YAxis fontSize={12} tickMargin={10} domain={['auto', 'auto']} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ r: 4 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="bodyFat">
            <ResponsiveContainer width="100%" height={225}>
              <LineChart data={progress.bodyFat}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" fontSize={12} tickMargin={10} />
                <YAxis fontSize={12} tickMargin={10} domain={['auto', 'auto']} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  dot={{ r: 4 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="strength">
            <ResponsiveContainer width="100%" height={225}>
              <LineChart data={progress.strength}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" fontSize={12} tickMargin={10} />
                <YAxis fontSize={12} tickMargin={10} domain={['auto', 'auto']} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#ff8042" 
                  strokeWidth={2}
                  dot={{ r: 4 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressOverview;
