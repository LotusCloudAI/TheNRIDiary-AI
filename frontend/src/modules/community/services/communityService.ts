import { type CommunityGroup, type ForumPost, communityGroups, forumPosts } from '../../../data/community';

interface GroupFilters {
  category?: string;
  location?: string;
  searchTerm?: string;
}

export function getGroupsByLocation(city: string): CommunityGroup[] {
  return communityGroups.filter(g => 
    g.location.toLowerCase().includes(city.toLowerCase())
  );
}

export function getGroupsByCategory(category: string): CommunityGroup[] {
  return communityGroups.filter(g => g.category === category);
}

export function searchGroups(searchTerm: string): CommunityGroup[] {
  const term = searchTerm.toLowerCase();
  return communityGroups.filter(g => 
    g.name.toLowerCase().includes(term) ||
    g.description.toLowerCase().includes(term) ||
    g.tags.some(tag => tag.toLowerCase().includes(term))
  );
}

export function filterGroups(filters: GroupFilters): CommunityGroup[] {
  return communityGroups.filter(group => {
    if (filters.category && group.category !== filters.category) return false;
    if (filters.location && !group.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      return group.name.toLowerCase().includes(term) ||
             group.description.toLowerCase().includes(term) ||
             group.tags.some(tag => tag.toLowerCase().includes(term));
    }
    return true;
  });
}

export function getPostsForGroup(groupId: number): ForumPost[] {
  return forumPosts.filter(post => post.groupId === groupId);
}

export function getRecentPosts(limit: number = 10): ForumPost[] {
  return [...forumPosts]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}
