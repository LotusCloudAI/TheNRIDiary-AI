interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  items: T[];
  hasNext: boolean;
  hasPrev: boolean;
}

export function paginate<T>(
  items: T[],
  page: number = 1,
  itemsPerPage: number = 10
): PaginationResult<T> {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentPage = Math.min(Math.max(1, page), totalPages);
  
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  
  return {
    currentPage,
    totalPages,
    items: items.slice(start, end),
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
}

export const PaginationControls: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      
      <span>Page {currentPage} of {totalPages}</span>
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};
