export interface Business {
  id: number;
  name: string;
  category: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  website?: string;
  description: string;
  email?: string;
  rating?: number;
}

export const businesses: Business[] = [
  {
    id: 1,
    name: "Texas Tech Solutions",
    category: "Technology",
    state: "Texas",
    city: "Dallas",
    address: "123 Main St, Dallas, TX 75201",
    phone: "(214) 555-0123",
    website: "https://texastech.example.com",
    description: "Leading technology solutions provider in Dallas",
    email: "info@texastech.example.com",
    rating: 4.5
  },
  {
    id: 2,
    name: "Austin Creative Studio",
    category: "Culture",
    state: "Texas",
    city: "Austin",
    address: "456 Congress Ave, Austin, TX 78701",
    phone: "(512) 555-0456",
    description: "Creative agency specializing in branding and design",
    rating: 4.8
  },
  {
    id: 3,
    name: "Silicon Valley Advisors",
    category: "Business",
    state: "California",
    city: "San Jose",
    address: "789 Tech Blvd, San Jose, CA 95110",
    phone: "(408) 555-0789",
    website: "https://svadvisors.example.com",
    description: "Business consulting for tech startups",
    email: "contact@svadvisors.example.com"
  }
];
