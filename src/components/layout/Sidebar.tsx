
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart2, 
  ChevronLeft, 
  ChevronRight, 
  Dumbbell, 
  Home, 
  Settings, 
  Utensils 
} from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Workouts",
      href: "/workouts",
      icon: Dumbbell,
    },
    {
      name: "Progress",
      href: "/progress",
      icon: BarChart2,
    },
    {
      name: "Nutrition",
      href: "/nutrition",
      icon: Utensils,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={cn(
        "bg-card text-card-foreground border-r border-border flex flex-col transition-all duration-300 ease-in-out fixed inset-y-0 z-50 md:relative",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        {isOpen ? (
          <Link to="/dashboard" className="text-xl font-bold flex items-center">
            <span className="text-primary">Fit</span>
            <span>Track</span>
          </Link>
        ) : (
          <Link to="/dashboard" className="text-xl font-bold mx-auto">
            <span className="text-primary">F</span>
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-accent text-muted-foreground hover:text-accent-foreground hidden md:block"
        >
          {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                  !isOpen && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          {isOpen ? (
            <>
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                JD
              </div>
              <div>
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-muted-foreground">Premium Member</p>
              </div>
            </>
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
              JD
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
