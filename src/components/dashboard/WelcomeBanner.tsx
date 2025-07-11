
import { Waves } from "lucide-react";

interface WelcomeBannerProps {
  greeting: string;
  name: string;
  quote: string;
}

const WelcomeBanner = ({ greeting, name, quote }: WelcomeBannerProps) => {
  return (
    <div className="bg-primary/10 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div>
        <div className="flex items-center">
          <Waves className="mr-2 h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">{greeting}, {name}</h1>
        </div>
        <p className="text-muted-foreground mt-1">{quote}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today's Date</p>
          <p className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
        </div>
        <div className="bg-primary text-primary-foreground font-mono font-bold px-4 py-3 rounded-lg">
          {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
