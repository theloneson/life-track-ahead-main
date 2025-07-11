
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

type NutritionSummaryProps = {
  nutrition: {
    caloriesConsumed: number;
    caloriesGoal: number;
    macros: {
      name: string;
      value: number;
      color: string;
    }[];
  };
};

const NutritionSummary = ({ nutrition }: NutritionSummaryProps) => {
  const { caloriesConsumed, caloriesGoal, macros } = nutrition;
  const caloriesRemaining = caloriesGoal - caloriesConsumed;
  const percentConsumed = Math.round((caloriesConsumed / caloriesGoal) * 100);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Nutrition Summary</CardTitle>
        <CardDescription>Today's calorie and macro breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-center">
              <div className="text-3xl font-bold">{caloriesConsumed}</div>
              <div className="text-sm text-gray-500">Calories consumed</div>
            </div>
            
            <div className="text-center">
              <div className="text-xl font-medium">
                {caloriesRemaining > 0 ? `${caloriesRemaining} remaining` : "Goal reached!"}
              </div>
              <div className="text-sm text-gray-500">
                {percentConsumed}% of daily goal
              </div>
            </div>
          </div>
          
          <div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={macros}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {macros.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionSummary;
