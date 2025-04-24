
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How TurfTime Works</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Booking your next sports session is as easy as booking movie tickets. Follow these simple steps to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Your Turf</h3>
              <p className="text-muted-foreground">
                Browse through our collection of high-quality sports facilities, filter by sport, location, or price, and find the perfect turf for your game.
              </p>
              <div className="mt-6 w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80&w=600" 
                  alt="Browse turfs" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Select Date & Time</h3>
              <p className="text-muted-foreground">
                Choose from available slots just like selecting seats for a movie. Pick a date and time that works for you and your team.
              </p>
              <div className="mt-6 w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600" 
                  alt="Select time slots" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Confirm & Play</h3>
              <p className="text-muted-foreground">
                Make your payment securely online, receive instant confirmation on your device, and just show up ready to play!
              </p>
              <div className="mt-6 w-full aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                  alt="Confirm booking" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/browse">
              <Button size="lg">
                Browse Available Turfs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Booking Process</h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-3">1. Create an Account</h3>
                <p className="text-muted-foreground mb-4">
                  Start by creating a free account on TurfTime. This allows you to track your bookings, receive notifications, and make future bookings easier.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Sign up using your email or social accounts</li>
                  <li>Fill in your basic information</li>
                  <li>Set up your player profile</li>
                </ul>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                  alt="Create account" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&q=80&w=600" 
                  alt="Browse turfs" 
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-3">2. Browse Available Turfs</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our wide selection of sports turfs based on your preferences. Filter by location, sport type, price range, or facility features.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>View high-quality photos of each facility</li>
                  <li>Check user ratings and reviews</li>
                  <li>Compare prices and amenities</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-3">3. Select Your Preferred Time Slot</h3>
                <p className="text-muted-foreground mb-4">
                  Once you've chosen a turf, select an available date and time slot that works for you. Our booking calendar shows real-time availability.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>View availability in a calendar format</li>
                  <li>Select from hourly time slots</li>
                  <li>See price variations by time of day</li>
                </ul>
              </div>
              <div className="md:w-1/2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600" 
                  alt="Select time slots" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 order-2 md:order-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
                  alt="Confirm booking" 
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-3">4. Complete Your Booking</h3>
                <p className="text-muted-foreground mb-4">
                  Confirm your booking details and make a secure payment. Once completed, you'll receive a confirmation email with all the details.
                </p>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Pay securely via multiple payment methods</li>
                  <li>Receive instant digital confirmation</li>
                  <li>Get directions and access instructions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">What happens if I need to cancel my booking?</h3>
                <p className="text-muted-foreground">
                  You can cancel your booking up to 12 hours before your scheduled time for a full refund. For cancellations made less than 12 hours in advance, a cancellation fee may apply.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can I modify my booking time or date?</h3>
                <p className="text-muted-foreground">
                  Yes, you can modify your booking details up to 24 hours before your scheduled time, subject to availability. Simply log in to your account and go to "My Bookings" to make changes.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Do I need to bring my own equipment?</h3>
                <p className="text-muted-foreground">
                  This depends on the turf and sport. Some facilities provide basic equipment, while others require you to bring your own. Check the turf details page for specific information about available amenities.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">How early should I arrive for my booking?</h3>
                <p className="text-muted-foreground">
                  We recommend arriving 15-20 minutes before your scheduled time to check in and prepare. This ensures you can make the most of your booked time slot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your First Turf?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of sports enthusiasts who are already enjoying hassle-free turf bookings with TurfTime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/browse">
              <Button variant="secondary" size="lg">
                Browse Turfs Now
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
