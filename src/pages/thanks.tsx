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
      <div className='mx-auto flex h-full min-h-screen w-10/12 flex-col items-center justify-center md:w-full'>
        <span className='mr-4 inline-block animate-wave text-6xl md:mr-8'>
          👋
        </span>
        <h1 className='my-8 text-center text-3xl leading-10'>
          Thank you for contacting me!
        </h1>

        <p className='text-md mb-8 text-center font-light text-dark opacity-70'>
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
