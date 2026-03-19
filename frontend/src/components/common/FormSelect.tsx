import React, { type SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  helperText?: string;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  options,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className={`form-group ${error ? 'has-error' : ''} ${className}`}>
      <label htmlFor={selectId} className="form-label">
        {label}
        {props.required && <span className="required">*</span>}
      </label>
      
      <select
        id={selectId}
        className={`form-select ${error ? 'error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
        {...props}
      >
        <option value="">Select {label}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && (
        <div id={`${selectId}-error`} className="error-message">
          {error}
        </div>
      )}
      
      {helperText && !error && (
        <div id={`${selectId}-helper`} className="helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
};
