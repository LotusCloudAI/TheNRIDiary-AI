import React, { useState, useEffect } from 'react';
import { getRandomAdByPosition } from '../services/adService';
import type { Ad } from '../../../data/ads';

interface AdSlotProps {
  position: 'top' | 'sidebar' | 'bottom' | 'inline';
  className?: string;
  fallback?: React.ReactNode;
}

export const AdSlot: React.FC<AdSlotProps> = ({ 
  position, 
  className = '',
  fallback 
}) => {
  const [ad, setAd] = useState<Ad | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate async loading
    const timer = setTimeout(() => {
      const selectedAd = getRandomAdByPosition(position);
      setAd(selectedAd);
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [position]);

  if (isLoading) {
    return <div className={`ad-slot loading ${className}`}>Loading ad...</div>;
  }

  if (!ad) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className={`ad-slot empty ${className}`}>
        {/* Empty ad slot - could be used for placeholder */}
      </div>
    );
  }

  return (
    <div className={`ad-slot ${position} ${className}`}>
      <a 
        href={ad.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="ad-link"
      >
        <img 
          src={ad.imageUrl} 
          alt={ad.title}
          className="ad-image"
          loading="lazy"
        />
        {ad.description && (
          <div className="ad-description">{ad.description}</div>
        )}
      </a>
    </div>
  );
};
