
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Book Sports Turfs with Ease
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find and book the perfect sports turf in your area. 
            Just like booking movie tickets, but for sports facilities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link to="/browse">
              <Button size="lg">Browse Turfs</Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
