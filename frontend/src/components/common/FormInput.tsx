import React,  { type InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  helperText,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className={`form-group ${error ? 'has-error' : ''} ${className}`}>
      <label htmlFor={inputId} className="form-label">
        {label}
        {props.required && <span className="required">*</span>}
      </label>
      
      <input
        id={inputId}
        className={`form-input ${error ? 'error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      
      {error && (
        <div id={`${inputId}-error`} className="error-message">
          {error}
        </div>
      )}
      
      {helperText && !error && (
        <div id={`${inputId}-helper`} className="helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
};
