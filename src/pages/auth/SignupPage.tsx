
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User, Scale, Ruler, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  height: string;
  weight: string;
  fitnessLevel: string;
  fitnessGoals: string[];
}

const SignupPage = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    height: "",
    weight: "",
    fitnessLevel: "beginner",
    fitnessGoals: []
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password || !userData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (userData.password !== userData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    if (userData.password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Mock registration - in a real app, this would call an API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Store the user data
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify({
        name: `${userData.firstName} ${userData.lastName}`,
        ...userData,
        password: undefined, // Don't store the password
        confirmPassword: undefined
      }));
      
      toast({
        title: "Success",
        description: "Account created successfully!",
      });
      
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1F2C] to-[#403E43] p-4">
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-[#9b87f5]/20 text-white shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-[#9b87f5] mb-2">Start Your Fitness Journey</CardTitle>
          <CardDescription className="text-white/70">Create your account to access personalized workouts and track your progress</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      value={userData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      value={userData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      type="email"
                      value={userData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={userData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="pl-10 pr-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9b87f5]"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={userData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Fitness Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white">Age</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      type="number"
                      value={userData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Age"
                      min="13"
                      max="120"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Height (cm)</Label>
                  <div className="relative">
                    <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      type="number"
                      value={userData.height}
                      onChange={(e) => handleInputChange("height", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Height in cm"
                      min="100"
                      max="250"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Weight (kg)</Label>
                  <div className="relative">
                    <Scale className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b87f5]" size={20} />
                    <Input
                      type="number"
                      value={userData.weight}
                      onChange={(e) => handleInputChange("weight", e.target.value)}
                      className="pl-10 bg-white/10 border-[#9b87f5]/30 text-white placeholder-white/50 focus:border-[#9b87f5]"
                      placeholder="Weight in kg"
                      min="30"
                      max="300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Fitness Level</Label>
                  <Select
                    value={userData.fitnessLevel}
                    onValueChange={(value) => handleInputChange("fitnessLevel", value)}
                  >
                    <SelectTrigger className="bg-white/10 border-[#9b87f5]/30 text-white">
                      <SelectValue placeholder="Select your fitness level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-white/30 bg-white/10"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-white/70">
                I agree to the <a href="#" className="text-[#9b87f5] hover:underline">Terms of Service</a> and{" "}
                <a href="#" className="text-[#9b87f5] hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] transition-colors text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Start Your Journey"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-white/70">
            Already have an account?{" "}
            <Link to="/login" className="text-[#9b87f5] hover:text-[#33C3F0] transition-colors">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;
