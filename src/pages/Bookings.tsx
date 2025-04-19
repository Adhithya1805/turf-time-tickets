
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { turfs } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";

// Mock bookings data
const mockBookings = [
  {
    id: "b1",
    turfId: "1",
    date: "2023-05-15",
    time: "6:00 PM",
    status: "upcoming",
  },
  {
    id: "b2",
    turfId: "3",
    date: "2023-05-10",
    time: "7:00 PM",
    status: "completed",
  },
  {
    id: "b3",
    turfId: "2",
    date: "2023-05-05",
    time: "5:00 PM",
    status: "completed",
  },
];

export default function Bookings() {
  const upcomingBookings = mockBookings.filter(
    (booking) => booking.status === "upcoming"
  );
  const pastBookings = mockBookings.filter(
    (booking) => booking.status === "completed"
  );

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        
        {upcomingBookings.length === 0 && pastBookings.length === 0 ? (
          <div className="mt-8 rounded-lg border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold">No Bookings Yet</h2>
            <p className="mt-2 text-muted-foreground">
              You haven't made any bookings yet. Browse turfs to make your first booking.
            </p>
            <Button asChild className="mt-4">
              <Link to="/browse">Browse Turfs</Link>
            </Button>
          </div>
        ) : (
          <div className="mt-8 space-y-8">
            {upcomingBookings.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold">Upcoming Bookings</h2>
                <div className="mt-4 space-y-4">
                  {upcomingBookings.map((booking) => {
                    const turf = turfs.find((t) => t.id === booking.turfId);
                    if (!turf) return null;
                    
                    return (
                      <div
                        key={booking.id}
                        className="rounded-lg border bg-card p-4 shadow-sm"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex gap-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                              <img
                                src={turf.image}
                                alt={turf.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{turf.name}</h3>
                              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-1 h-3.5 w-3.5" />
                                <span className="line-clamp-1">{turf.location}</span>
                              </div>
                              <div className="mt-1 flex items-center gap-2 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-3.5 w-3.5" />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-3.5 w-3.5" />
                                  <span>{booking.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row gap-2">
                            <Button variant="outline" size="sm">
                              Cancel
                            </Button>
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {pastBookings.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold">Past Bookings</h2>
                <div className="mt-4 space-y-4">
                  {pastBookings.map((booking) => {
                    const turf = turfs.find((t) => t.id === booking.turfId);
                    if (!turf) return null;
                    
                    return (
                      <div
                        key={booking.id}
                        className="rounded-lg border bg-card p-4 shadow-sm"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex gap-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                              <img
                                src={turf.image}
                                alt={turf.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold">{turf.name}</h3>
                              <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                <MapPin className="mr-1 h-3.5 w-3.5" />
                                <span className="line-clamp-1">{turf.location}</span>
                              </div>
                              <div className="mt-1 flex items-center gap-2 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="mr-1 h-3.5 w-3.5" />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-3.5 w-3.5" />
                                  <span>{booking.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button variant="outline" size="sm">
                              Book Again
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
