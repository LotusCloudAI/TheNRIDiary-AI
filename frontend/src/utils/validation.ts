export interface ValidationRule {
  validate: (value: any) => boolean;
  message: string;
}

export interface ValidationRules {
  [key: string]: ValidationRule[];
}

export const validators = {
  required: (fieldName: string): ValidationRule => ({
    validate: (value: any) => value !== undefined && value !== null && value !== '',
    message: `${fieldName} is required`
  }),
  
  email: (): ValidationRule => ({
    validate: (value: string) => {
      if (!value) return true; // Skip if empty (use required for mandatory)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message: 'Please enter a valid email address'
  }),
  
  phone: (): ValidationRule => ({
    validate: (value: string) => {
      if (!value) return true;
      // Simple phone validation - allows formats: 123-456-7890, (123) 456-7890, 1234567890
      const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return phoneRegex.test(value.replace(/\s/g, ''));
    },
    message: 'Please enter a valid phone number'
  }),
  
  url: (): ValidationRule => ({
    validate: (value: string) => {
      if (!value) return true;
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    message: 'Please enter a valid URL (include https://)'
  }),
  
  minLength: (length: number, fieldName: string): ValidationRule => ({
    validate: (value: string) => !value || value.length >= length,
    message: `${fieldName} must be at least ${length} characters`
  }),
  
  maxLength: (length: number, fieldName: string): ValidationRule => ({
    validate: (value: string) => !value || value.length <= length,
    message: `${fieldName} must not exceed ${length} characters`
  }),
  
  numeric: (fieldName: string): ValidationRule => ({
    validate: (value: any) => !value || !isNaN(parseFloat(value)) && isFinite(value),
    message: `${fieldName} must be a number`
  })
};

export function validateField(
  value: any,
  rules: ValidationRule[]
): { isValid: boolean; error: string | null } {
  for (const rule of rules) {
    if (!rule.validate(value)) {
      return { isValid: false, error: rule.message };
    }
  }
  return { isValid: true, error: null };
}

export function validateForm<T extends Record<string, any>>(
  data: T,
  validationRules: ValidationRules
): { isValid: boolean; errors: Partial<Record<keyof T, string>> } {
  const errors: Partial<Record<keyof T, string>> = {};
  
  Object.keys(validationRules).forEach(field => {
    const rules = validationRules[field];
    const value = data[field];
    
    const { isValid, error } = validateField(value, rules);
    if (!isValid && error) {
      errors[field as keyof T] = error;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
