export interface Ad {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  position: 'top' | 'sidebar' | 'bottom' | 'inline';
  startDate: string;
  endDate: string;
  isActive: boolean;
  priority?: number; // Higher priority shows first
  description?: string;
}

export const ads: Ad[] = [
  {
    id: 1,
    title: "Texas Business Expo",
    imageUrl: "/ads/texas-expo.jpg",
    link: "https://texasbusinessexpo.com",
    position: "top",
    startDate: "2025-03-01",
    endDate: "2025-04-30",
    isActive: true,
    priority: 10
  },
  {
    id: 2,
    title: "NRI Banking Services",
    imageUrl: "/ads/nri-banking.jpg",
    link: "https://nribanking.example.com",
    position: "sidebar",
    startDate: "2025-03-01",
    endDate: "2025-06-30",
    isActive: true,
    description: "Special banking services for NRIs",
    priority: 5
  },
  {
    id: 3,
    title: "Community Event: Holi Celebration",
    imageUrl: "/ads/holi-fest.jpg",
    link: "/events/holi-2025",
    position: "inline",
    startDate: "2025-03-10",
    endDate: "2025-03-20",
    isActive: true,
    priority: 8
  },
  {
    id: 4,
    title: "Real Estate Investment Webinar",
    imageUrl: "/ads/real-estate.jpg",
    link: "https://realestate.example.com/webinar",
    position: "sidebar",
    startDate: "2025-03-15",
    endDate: "2025-04-15",
    isActive: true,
    priority: 3
  }
];
