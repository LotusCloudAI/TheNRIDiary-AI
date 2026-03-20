import { useState, useCallback } from 'react'; 

interface ErrorState {
  message: string;
  code?: string | number;
  details?: any;
}

export function useErrorHandler() {
  const [error, setError] = useState<ErrorState | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = useCallback((err: unknown) => {
    if (err instanceof Error) {
      setError({
        message: err.message,
        details: err.stack
      });
    } else if (typeof err === 'string') {
      setError({ message: err });
    } else {
      setError({ message: 'An unknown error occurred' });
    }
    
    // Log to error tracking service
    console.error('Error handled:', err);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const withErrorHandling = useCallback(<T,>(
    fn: (...args: any[]) => Promise<T>
  ) => {
    return async (...args: any[]): Promise<T | undefined> => {
      try {
        setIsLoading(true);
        clearError();
        return await fn(...args);
      } catch (err) {
        handleError(err);
        return undefined;
      } finally {
        setIsLoading(false);
      }
    };
  }, [handleError, clearError]);

  return {
    error,
    isLoading,
    handleError,
    clearError,
    withErrorHandling
  };
}

// Example usage:
/*
function MyComponent() {
  const { error, isLoading, withErrorHandling } = useErrorHandler();
  
  const fetchData = withErrorHandling(async () => {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
  });
  
  useEffect(() => {
    fetchData();
  }, []);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>Data loaded</div>;
}
*/
