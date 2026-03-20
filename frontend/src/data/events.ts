export interface Event {
  id: number;
  title: string;
  category: string; // "Business", "Technology", "Culture", "Community"
  date: string; // ISO date
  endDate?: string;
  location: string; // "City, State"
  venue: string;
  description: string;
  price?: number; // 0 for free events
  organizer: string;
  organizerContact?: string;
  attendees?: number;
  image?: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Texas Startup Conference 2025",
    category: "Business",
    date: "2025-04-15T09:00:00",
    endDate: "2025-04-16T18:00:00",
    location: "Dallas, TX",
    venue: "Dallas Convention Center",
    description: "Annual gathering of Texas startups and investors",
    price: 299,
    organizer: "Texas Tech Alliance",
    attendees: 500
  },
  {
    id: 2,
    title: "AI in Healthcare Workshop",
    category: "Technology",
    date: "2025-03-25T14:00:00",
    location: "Austin, TX",
    venue: "Austin Public Library",
    description: "Learn how AI is transforming healthcare",
    price: 0,
    organizer: "Austin Tech Meetup",
    attendees: 75
  },
  {
    id: 3,
    title: "Diwali Cultural Festival",
    category: "Culture",
    date: "2025-10-20T16:00:00",
    endDate: "2025-10-22T22:00:00",
    location: "San Jose, CA",
    venue: "Plaza de Cesar Chavez",
    description: "Celebration of Indian culture with music, dance, and food",
    price: 15,
    organizer: "Indian Cultural Association",
    attendees: 2000
  },
  {
    id: 4,
    title: "Past Tech Meetup (Example)",
    category: "Technology",
    date: "2025-02-10T18:00:00",
    location: "Dallas, TX",
    venue: "WeWork",
    description: "Monthly tech meetup (past event)",
    price: 0,
    organizer: "Dallas Techies",
    attendees: 45
  }
];
