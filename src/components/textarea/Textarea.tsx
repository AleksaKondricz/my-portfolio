import * as React from 'react';

interface TextAreaProps {
  placeholder: string;
  name: string;
}
export default function TextArea({ placeholder, name }: TextAreaProps) {
  return (
    <div className='m-4 w-full'>
      <label htmlFor='username' className='mb-2 block text-sm font-medium '>
        Your Message
      </label>
      <textarea
        className='textarea ring-shadow-0 h-48 w-full rounded-lg border-0 shadow-md focus:bg-primary-50 focus:shadow-lg focus:ring-0 '
        placeholder={placeholder}
        name={name}
      ></textarea>
    </div>
  );
}
