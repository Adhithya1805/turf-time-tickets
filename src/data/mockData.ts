
export interface Turf {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  sport: string;
  amenities: string[];
  description: string;
}

export const turfs: Turf[] = [
  {
    id: "1",
    name: "Green Valley Football Turf",
    location: "Downtown Sports Complex, Central City",
    image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 80,
    rating: 4.5,
    sport: "Football",
    amenities: ["Changing Rooms", "Floodlights", "Parking", "Water Dispensers"],
    description: "Professional standard football turf with FIFA approved artificial grass. Perfect for 5-a-side and 7-a-side matches with excellent facilities."
  },
  {
    id: "2",
    name: "City Hoops Basketball Court",
    location: "Riverside Recreation Center, East Side",
    image: "https://images.unsplash.com/photo-1505666287802-931dc83d6cce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 65,
    rating: 4.3,
    sport: "Basketball",
    amenities: ["Scoreboard", "Seating Area", "Pro Flooring"],
    description: "Full-size regulation basketball court with professional flooring. Electronic scoreboard and spectator seating available."
  },
  {
    id: "3",
    name: "Smash Point Tennis Club",
    location: "Hillside Sports Village, North Heights",
    image: "https://images.unsplash.com/photo-1562742938-bbcc276ada7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 90,
    rating: 4.7,
    sport: "Tennis",
    amenities: ["Clay Courts", "Pro Shop", "Coaching Available", "Racket Rental"],
    description: "Premium clay tennis courts maintained to professional standards. Racket rental and professional coaching available on request."
  },
  {
    id: "4",
    name: "Cricket Stadium",
    location: "Sunshine Sports Park, West End",
    image: "https://images.unsplash.com/photo-1589743795127-e32dfd70a399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 120,
    rating: 4.8,
    sport: "Cricket",
    amenities: ["Practice Nets", "Pavilion", "Electronic Scoreboard", "Equipment Rental"],
    description: "Full-size cricket ground with well-maintained outfield and pitch. Practice nets and pavilion with changing facilities included."
  },
  {
    id: "5",
    name: "Volley Paradise",
    location: "Beach Sports Complex, South Shore",
    image: "https://images.unsplash.com/photo-1534296264129-22c9f242d00c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 70,
    rating: 4.2,
    sport: "Volleyball",
    amenities: ["Sand Courts", "Nets Provided", "Shower Facilities"],
    description: "Premium sand volleyball courts designed for both recreational and competitive play. Full facilities including showers and changing rooms."
  },
  {
    id: "6",
    name: "Elite Futsal Arena",
    location: "Metropolitan Sports Hub, City Center",
    image: "https://images.unsplash.com/photo-1577075246611-39e1f9f0fa3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 85,
    rating: 4.6,
    sport: "Futsal",
    amenities: ["Pro Flooring", "Digital Scoreboard", "Spectator Seating"],
    description: "Indoor futsal arena with professional-grade flooring and markings. Perfect for fast-paced futsal matches with digital scoring system."
  },
];

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export const generateTimeSlots = (date: Date): TimeSlot[] => {
  // Generate time slots from 6am to 10pm
  const slots: TimeSlot[] = [];
  const startHour = 6; // 6am
  const endHour = 22; // 10pm
  
  for (let hour = startHour; hour < endHour; hour++) {
    // Create random availability, but more likely to be available
    const available = Math.random() > 0.3;
    
    // Format the time (e.g. "6:00 AM")
    const timeStr = `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    
    slots.push({
      id: `slot-${date.toISOString().split('T')[0]}-${hour}`,
      time: timeStr,
      available
    });
  }
  
  return slots;
};
