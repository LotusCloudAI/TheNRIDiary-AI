import { useState, useEffect, useCallback } from 'react';

interface UseFormPersistenceOptions<T> {
  key: string;
  initialData: T;
  expiration?: number; // milliseconds
}

export function useFormPersistence<T extends Record<string, any>>({
  key,
  initialData,
  expiration = 24 * 60 * 60 * 1000 // 24 hours default
}: UseFormPersistenceOptions<T>) {
  const [data, setData] = useState<T>(() => {
    try {
      const savedData = localStorage.getItem(`form_${key}`);
      if (savedData) {
        const parsed = JSON.parse(savedData);
        const timestamp = parsed._timestamp;
        
        // Check if data has expired
        if (timestamp && Date.now() - timestamp < expiration) {
          const { _timestamp, ...rest } = parsed;
          return rest as T;
        } else {
          // Remove expired data
          localStorage.removeItem(`form_${key}`);
        }
      }
    } catch (error) {
      console.error('Error loading saved form data:', error);
    }
    return initialData;
  });

  const [isDirty, setIsDirty] = useState(false);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isDirty) {
      const dataToSave = {
        ...data,
        _timestamp: Date.now()
      };
      localStorage.setItem(`form_${key}`, JSON.stringify(dataToSave));
    }
  }, [data, key, isDirty]);

  const updateField = useCallback((field: keyof T, value: any) => {
    setData(prev => {
      const newData = { ...prev, [field]: value };
      setIsDirty(true);
      return newData;
    });
  }, []);

  const updateMultiple = useCallback((newData: Partial<T>) => {
    setData(prev => {
      const updated = { ...prev, ...newData };
      setIsDirty(true);
      return updated;
    });
  }, []);

  const resetForm = useCallback(() => {
    setData(initialData);
    setIsDirty(false);
    localStorage.removeItem(`form_${key}`);
  }, [key, initialData]);

  const clearSavedData = useCallback(() => {
    localStorage.removeItem(`form_${key}`);
  }, [key]);

  return {
    data,
    setData,
    updateField,
    updateMultiple,
    resetForm,
    clearSavedData,
    isDirty
  };
}

// Example usage in a form:
/*
const { data, updateField, resetForm } = useFormPersistence({
  key: 'business-submission',
  initialData: {
    name: '',
    category: '',
    state: '',
    city: '',
    phone: ''
  }
});

// Then use in form:
<input 
  value={data.name}
  onChange={(e) => updateField('name', e.target.value)}
/>
*/
