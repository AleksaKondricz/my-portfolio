import * as React from 'react';

export default function Footer() {
  return (
    <footer className='bg-white py-8 text-center text-sm text-dark opacity-60'>
      © {new Date().getFullYear()} By Aleksa Kondricz
    </footer>
  );
}
