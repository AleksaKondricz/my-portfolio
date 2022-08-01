import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function ThanksPage() {
  return (
    <>
      <Seo
        templateTitle='Thanks'
        description='Thanks for contacting me via filling my form'
      />
      <div className='flex h-full min-h-screen flex-col items-center justify-center'>
        <h1 className='mb-8 text-4xl'>
          <span className='inline-block animate-wave'>👋</span> Thank you for
          contacting me!
        </h1>

        <p className='text-md mb-8 font-light text-dark opacity-70'>
          As Humphry Bogart once said: I think this is the beginning of a
          beautiful friendship.
        </p>
        <ArrowLink
          variant='primary'
          direction='left'
          className='w-fit py-4 px-12'
          href='/'
        >
          Go Back
        </ArrowLink>
      </div>
    </>
  );
}
