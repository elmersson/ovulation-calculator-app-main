import React from 'react';
import { InputProps } from '../types';

export default function Input({name, type, placeholder, value, onChange}: InputProps) {
  return (
    <>
      <input
        name={name} 
        type={type || 'text'}
        placeholder={placeholder || ''}  
        value={value || ''}
        onChange={onChange}
        className='mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring-indigo-200 focus:ring-opacity-50'
      />
    </>
  );
}
