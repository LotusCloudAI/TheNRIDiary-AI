import React from 'react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionText?: string;
  actionLink?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No results found',
  message = 'Try adjusting your filters or search criteria',
  actionText,
  actionLink,
  icon
}) => {
  return (
    <div className="empty-state">
      {icon || (
        <div className="empty-state-icon">🔍</div>
      )}
      <h3>{title}</h3>
      <p>{message}</p>
      {actionText && actionLink && (
        <Link to={actionLink} className="empty-state-action">
          {actionText}
        </Link>
      )}
    </div>
  );
};
