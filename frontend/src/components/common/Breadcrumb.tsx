import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items, 
  separator = '>' 
}) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb">
      <ol>
        {items.map((item, index) => (
          <li key={index} className={item.isCurrent ? 'active' : ''}>
            {item.isCurrent ? (
              <span>{item.label}</span>
            ) : (
              <>
                <Link to={item.path}>{item.label}</Link>
                {index < items.length - 1 && (
                  <span className="separator">{separator}</span>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
