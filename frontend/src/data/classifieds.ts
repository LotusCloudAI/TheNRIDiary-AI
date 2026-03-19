export interface Classified {
  id: number;
  title: string;
  category: string; // "For Sale", "Services", "Jobs", "Housing", etc.
  price?: number;
  location: string;
  description: string;
  contactName: string;
  contactEmail?: string;
  contactPhone?: string;
  date: string; // ISO date
  images?: string[];
}

export const classifieds: Classified[] = [
  {
    id: 1,
    title: "2020 Toyota Camry - Excellent Condition",
    category: "For Sale",
    price: 18500,
    location: "Dallas, TX",
    description: "Low mileage, well maintained, clean title",
    contactName: "John Smith",
    contactEmail: "john@example.com",
    contactPhone: "(214) 555-1234",
    date: "2025-03-01"
  },
  {
    id: 2,
    title: "Experienced Web Developer Available",
    category: "Services",
    price: 75,
    location: "Austin, TX",
    description: "Full-stack developer with 5+ years experience",
    contactName: "Sarah Johnson",
    contactEmail: "sarah@example.com",
    date: "2025-03-15"
  },
  {
    id: 3,
    title: "2BR Apartment for Rent",
    category: "Housing",
    price: 1800,
    location: "San Jose, CA",
    description: "Modern apartment near downtown",
    contactName: "Property Management",
    contactPhone: "(408) 555-5678",
    date: "2025-03-10"
  }
];
