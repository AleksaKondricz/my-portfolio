import * as React from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';

import headerLinksData from '@/components/layout/headerLinksData';

import linkProps from './header.config';

import Logo from '~/svg/aleksa-logo.svg';

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <Logo
          onClick={() => scrollToTop()}
          className='cursor-pointer text-4xl'
        />
        <nav className='hidden md:block md:w-1/3'>
          <ul className='flex items-center justify-between space-x-4'>
            {headerLinksData.map((l) => (
              <Link
                {...linkProps}
                to={l.id}
                key={l.id}
                className='cursor-pointer hover:text-primary-500 '
              >
                {l.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
