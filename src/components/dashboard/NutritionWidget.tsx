
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface NutritionWidgetProps {
  nutrition: {
    caloriesConsumed: number;
    caloriesGoal: number;
    macros: Array<{
      name: string;
      value: number;
      color: string;
    }>;
  };
}

const NutritionWidget = ({ nutrition }: NutritionWidgetProps) => {
  const { caloriesConsumed, caloriesGoal, macros } = nutrition;
  const percentCalories = Math.round((caloriesConsumed / caloriesGoal) * 100);
  const remaining = caloriesGoal - caloriesConsumed;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Nutrition Today</CardTitle>
        <Utensils className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-2">
              <div className="text-3xl font-bold">{caloriesConsumed}</div>
              <p className="text-sm text-muted-foreground">
                of {caloriesGoal} cal
              </p>
            </div>
            <div className="w-full bg-accent/20 rounded-full h-2.5 mb-1">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${percentCalories}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground">
              {remaining > 0
                ? `${remaining} calories remaining`
                : `${Math.abs(remaining)} calories over`}
            </p>
          </div>

          <div className="h-32 md:h-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macros}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {macros.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionWidget;
