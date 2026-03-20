import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  hasMore: boolean;
  loadMore: () => void;
  threshold?: number;
}

export function useInfiniteScroll({
  hasMore,
  loadMore,
  threshold = 0.8
}: UseInfiniteScrollOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasMore && !isLoading) {
      setIsLoading(true);
      loadMore();
    }
  }, [hasMore, isLoading, loadMore]);

  useEffect(() => {
    const element = loadMoreRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(handleObserver, {
      threshold
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver, threshold]);

  // Reset loading state after load more completes
  useEffect(() => {
    if (!isLoading) return;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return { loadMoreRef, isLoading };
}
