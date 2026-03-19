import React, { useState } from 'react';
import { FormInput } from '../components/common/FormInput';
import { FormSelect } from '../components/common/FormSelect';
import { categories } from '../data/categories';
import { locations } from '../data/locations';

interface FormData {
  name: string;
  category: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

export default function SubmitBusinessPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    category: '',
    state: '',
    city: '',
    address: '',
    phone: '',
    email: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const states = Object.keys(locations.USA);
  const cities = formData.state 
    ? locations.USA[formData.state as keyof typeof locations.USA] || []
    : [];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name) newErrors.name = 'Business name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          category: '',
          state: '',
          city: '',
          address: '',
          phone: '',
          email: '',
          description: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categoryOptions = categories.map(cat => ({ value: cat, label: cat }));
  const stateOptions = states.map(state => ({ value: state, label: state }));
  const cityOptions = cities.map(city => ({ value: city, label: city }));

  return (
    <div className="submit-business-page">
      <h1>Submit Your Business</h1>
      
      {submitSuccess && (
        <div className="success-message">
          Business submitted successfully! It will appear after review.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="business-form">
        <FormInput
          label="Business Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={errors.name}
          required
          placeholder="Enter business name"
        />
        
        <FormSelect
          label="Category"
          options={categoryOptions}
          value={formData.category}
          onChange={(e) => handleChange('category', e.target.value)}
          error={errors.category}
          required
        />
        
        <FormSelect
          label="State"
          options={stateOptions}
          value={formData.state}
          onChange={(e) => handleChange('state', e.target.value)}
          error={errors.state}
          required
        />
        
        <FormSelect
          label="City"
          options={cityOptions}
          value={formData.city}
          onChange={(e) => handleChange('city', e.target.value)}
          error={errors.city}
          required
          disabled={!formData.state}
        />
        
        <FormInput
          label="Address"
          value={formData.address}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="Street address"
        />
        
        <FormInput
          label="Phone"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={errors.phone}
          required
          placeholder="(555) 123-4567"
        />
        
        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="contact@business.com"
        />
        
        <FormInput
          label="Description"
          value={formData.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Brief description of your business"
        />
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Business'}
        </button>
      </form>
    </div>
  );
}
