import * as React from 'react';

interface TextInputProps {
  placeholder: string;
  errorMsg: string;
  disabled: boolean;
}
export default function TextInput({ placeholder }: TextInputProps) {
  return (
    <div className='m-4 md:w-5/6'>
      <label htmlFor='username' className='mb-2 block text-sm font-medium '>
        Your name
      </label>
      <input
        type='text'
        placeholder={placeholder}
        className='input h-16  w-full rounded-lg border-0 shadow-md  focus:bg-primary-50 focus:shadow-lg focus:ring-0'
      />
    </div>
  );
}
