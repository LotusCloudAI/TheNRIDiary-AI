import React from 'react';

interface CategoryHeaderProps {
  categoryName: string;
  storyCount?: number;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  categoryName, 
  storyCount 
}) => {
  return (
    <div className="category-header">
      <h1>{categoryName}</h1>
      {storyCount !== undefined && (
        <p className="story-count">{storyCount} stories</p>
      )}
    </div>
  );
};
