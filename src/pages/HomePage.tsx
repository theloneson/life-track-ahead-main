
import { ArrowRight, CheckCircle, Dumbbell, CloudLightning, Star, Utensils, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-primary">Fit</span>
            <span>Track</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/#features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link to="/#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
            <Link to="/#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
                Track Your Fitness Journey <span className="text-primary">Like Never Before</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Set goals, track workouts, monitor nutrition, and see your progress all in one place. 
                FitTrack helps you stay on target and achieve your fitness dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative bg-card border border-border rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need To Reach Your Goals</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              FitTrack combines all the tools you need for a successful fitness journey in one easy-to-use platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-10 w-10 text-primary" />,
                title: "Workout Tracking",
                description: "Log and analyze your workouts with detailed progress metrics and visuals."
              },
              {
                icon: <Utensils className="h-10 w-10 text-primary" />,
                title: "Nutrition Monitoring",
                description: "Track calories and macros to optimize your diet for your specific goals."
              },
              {
                icon: <BarChart className="h-10 w-10 text-primary" />,
                title: "Progress Analytics",
                description: "Visualize your progress with comprehensive charts and insights."
              },
              {
                icon: <CloudLightning className="h-10 w-10 text-primary" />,
                title: "Goal Setting",
                description: "Set achievable goals and track your progress towards success."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: "Habit Building",
                description: "Build lasting fitness habits with daily check-ins and streaks."
              },
              {
                icon: <Star className="h-10 w-10 text-primary" />,
                title: "Achievement System",
                description: "Earn badges and rewards as you hit milestones in your fitness journey."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thousands of people have transformed their fitness journey with FitTrack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "FitTrack has completely changed how I approach my workouts. I've never been so consistent!",
                name: "Sarah Johnson",
                role: "Marathon Runner",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "As a personal trainer, I recommend FitTrack to all my clients. The progress tracking is unmatched.",
                name: "Mark Thompson",
                role: "Personal Trainer",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "The nutrition tracking feature helped me finally understand my eating habits and make meaningful changes.",
                name: "Emily Chen",
                role: "Weight Loss Journey",
                image: "https://randomuser.me/api/portraits/women/26.jpg"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 flex flex-col"
              >
                <div className="flex-1">
                  <div className="mb-4 text-primary">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className="inline-block h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of users who have already changed their lives with FitTrack.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="mt-4 text-sm opacity-80">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">FitTrack</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
                <li><Link to="/#features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link to="/#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link to="/#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} FitTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
