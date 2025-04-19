
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedTurfs } from "@/components/FeaturedTurfs";
import { turfs } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTurfs turfs={turfs} />

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How TurfTime Works</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Booking your next sports session is as easy as booking movie tickets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                  <path d="M16.5 9.4 7.55 4.24"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                  <circle cx="18.5" cy="15.5" r="2.5"></circle>
                  <path d="M20.27 17.27 22 19"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find a Turf</h3>
              <p className="text-muted-foreground">
                Browse through our collection of high-quality sports facilities and pick your favorite
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Select Date & Time</h3>
              <p className="text-muted-foreground">
                Choose from available slots just like selecting seats for a movie, and pick the time that works for you
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-primary"
                >
                  <path d="m9 11 3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirm & Play</h3>
              <p className="text-muted-foreground">
                Make your payment securely online and receive instant confirmation. Then just show up and play!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/browse">
              <Button size="lg">Book Your Turf Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sports Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Explore By Sport</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find the perfect facility for your favorite sport
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Football', 'Basketball', 'Tennis', 'Cricket', 'Volleyball', 'Futsal'].map((sport) => (
              <Link 
                key={sport} 
                to={`/browse?sport=${sport.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
                <img
                  src={turfs.find(t => t.sport === sport)?.image || ''}
                  alt={sport}
                  className="aspect-square object-cover w-full h-full group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className="text-white font-semibold">{sport}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold">Own a Sports Facility?</h2>
              <p className="mt-4">
                Join our platform and get your turf in front of thousands of sports enthusiasts. 
                Manage bookings easily and increase your revenue.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
