
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary-foreground"
            >
              <path d="M20 5H4V9H20V5Z" />
              <path d="M20 11H4V15H20V11Z" />
              <path d="M20 17H4V19H20V17Z" />
            </svg>
          </div>
          <span className="text-lg font-bold text-foreground">TurfTime</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            to="/browse"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Browse Turfs
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            to="/bookings"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            My Bookings
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="hidden md:flex">
              Sign Up
            </Button>
          </Link>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/browse" 
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Browse Turfs
                </Link>
                <Link 
                  to="/how-it-works" 
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  to="/bookings" 
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  My Bookings
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
