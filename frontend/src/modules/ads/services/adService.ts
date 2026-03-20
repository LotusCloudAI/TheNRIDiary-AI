import { type Ad, ads } from '../../../data/ads';

export function getAdsByPosition(position: Ad['position']): Ad[] {
  const now = new Date().toISOString().split('T')[0]; // Get YYYY-MM-DD
  
  return ads
    .filter(ad => 
      ad.position === position && 
      ad.isActive &&
      ad.startDate <= now &&
      ad.endDate >= now
    )
    .sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

export function getRandomAdByPosition(position: Ad['position']): Ad | null {
  const availableAds = getAdsByPosition(position);
  
  if (availableAds.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * availableAds.length);
  return availableAds[randomIndex];
}

export function isAdActive(ad: Ad): boolean {
  const now = new Date().toISOString().split('T')[0];
  return ad.isActive && ad.startDate <= now && ad.endDate >= now;
}
