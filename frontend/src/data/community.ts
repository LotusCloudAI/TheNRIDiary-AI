export interface CommunityGroup {
  id: number;
  name: string;
  category: string;
  description: string;
  members: number;
  location: string;
  isPrivate: boolean;
  createdAt: string;
  organizer: string;
  image?: string;
  tags: string[];
}

export interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  groupId?: number;
  createdAt: string;
  likes: number;
  replies: number;
}

export const communityGroups: CommunityGroup[] = [
  {
    id: 1,
    name: "Dallas Tech Professionals",
    category: "Technology",
    description: "Networking group for tech professionals in Dallas",
    members: 345,
    location: "Dallas, TX",
    isPrivate: false,
    createdAt: "2024-01-15",
    organizer: "Priya Sharma",
    tags: ["tech", "networking", "career"]
  },
  {
    id: 2,
    name: "Austin Indian Business Association",
    category: "Business",
    description: "Supporting Indian entrepreneurs in Austin",
    members: 178,
    location: "Austin, TX",
    isPrivate: false,
    createdAt: "2024-02-20",
    organizer: "Raj Patel",
    tags: ["business", "entrepreneurship", "networking"]
  },
  {
    id: 3,
    name: "Bay Area Cultural Exchange",
    category: "Culture",
    description: "Sharing Indian culture in the Bay Area",
    members: 512,
    location: "San Jose, CA",
    isPrivate: false,
    createdAt: "2023-11-05",
    organizer: "Anita Desai",
    tags: ["culture", "events", "community"]
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Looking for tech mentors in Dallas",
    content: "I'm a recent graduate looking for mentorship...",
    author: "Neha Gupta",
    groupId: 1,
    createdAt: "2025-03-10",
    likes: 15,
    replies: 8
  },
  {
    id: 2,
    title: "Starting a business in Austin - need advice",
    content: "Has anyone recently started a business in Austin?",
    author: "Vikram Singh",
    groupId: 2,
    createdAt: "2025-03-12",
    likes: 23,
    replies: 12
  }
];
