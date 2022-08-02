import * as React from 'react';
import { useRef } from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import ContactForm from '@/containers/forms/contactForm';

import klippProject from '~/images/klipp-project.png';
import klippProjectOne from '~/images/klipp-project-1.png';
import klippProjectTwo from '~/images/klipp-project-2.png';
import klippProjectThree from '~/images/klipp-project-3.png';
import FigmaLogo from '~/svg/figma.svg';
import GatsbyLogo from '~/svg/gatsby.svg';
import JestLogo from '~/svg/jest.svg';
import NextLogo from '~/svg/nextjs.svg';
import ReactLogo from '~/svg/react.svg';
import SassLogo from '~/svg/sass.svg';
import TailwindLogo from '~/svg/tailwind.svg';
import TypescriptLogo from '~/svg/typescript.svg';
import ViteLogo from '~/svg/vite.svg';
import VueLogo from '~/svg/vue.svg';
import WebflowLogo from '~/svg/webflow.svg';
import XDLogo from '~/svg/xd.svg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const myRef = useRef<HTMLDivElement>(null);
  const scrollToForm = () => {
    if (myRef.current !== null) {
      myRef.current.scrollIntoView();
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='layout  '>
          <div className='mx-auto flex h-full min-h-11/12 w-11/12 flex-col items-start justify-center text-start md:min-h-screen md:w-full'>
            <p className=' text-lg font-light text-dark md:mt-2 md:text-xl'>
              Aleksa Kondricz
            </p>
            <p className='mt-2 text-lg font-light text-dark opacity-70 md:text-xl'>
              Frontend developer with UX/UI skills
            </p>
            <h1 className=' my-8 w-5/6 text-3xl font-light leading-10 md:mt-4 md:text-5xl'>
              Hey there! I’m a frontend developer passionate about making the
              Web pleasent for everyone’s eyes. 👀
            </h1>

            <Button
              className='mt-6 py-4 px-6'
              variant='primary'
              onClick={scrollToForm}
            >
              {`Let's discuss future plans`}
            </Button>
          </div>
          <h1
            id='past'
            className='mx-auto mb-10 w-11/12 text-3xl font-light md:w-5/6 md:text-5xl'
          >
            The Past
          </h1>
          <p className='mx-auto mb-10 w-11/12 text-sm font-light text-dark md:w-full'>
            I and my husband who turns out to be an awesome full stack developer
            have been busy creating Klipp. I was in charge of the visuals of it
            and my husband was in charge of everything on the backend It’s an
            app focused on making customer service more reliable, fun and
            pleasent. It’s 90% finished and soon it will be ready to see the
            daylight. Want to know more about it?{' '}
            <a
              className='text-red-500 hover:underline'
              href='mailto:hello@klipp.app'
            >
              Contact us
            </a>{' '}
            and we’ll be happy to answer all of your questions.
          </p>
          <div className='m-auto grid h-full w-11/12 grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 md:w-full'>
            <NextImage
              useSkeleton
              className='max-w-1/2 h-auto cursor-pointer grayscale hover:grayscale-0'
              src={klippProject}
              alt='klipp project'
              layout='responsive'
            />
            <NextImage
              useSkeleton
              className='max-w-1/2 h-auto cursor-pointer grayscale hover:grayscale-0'
              src={klippProjectOne}
              alt='klipp project'
              layout='responsive'
            />
            <NextImage
              useSkeleton
              className='max-w-1/2 h-auto cursor-pointer grayscale hover:grayscale-0'
              src={klippProjectTwo}
              alt='klipp project'
              layout='responsive'
            />
            <NextImage
              useSkeleton
              className='max-w-1/2 h-auto cursor-pointer grayscale hover:grayscale-0'
              src={klippProjectThree}
              alt='klipp project'
              layout='responsive'
            />
          </div>
          <h1
            id='present'
            className='mx-auto mt-20 mb-10 w-11/12 text-3xl font-light md:w-5/6 md:text-5xl'
          >
            The Present
          </h1>
          <p className='mx-auto mb-10 w-11/12 text-sm font-light text-dark md:w-full'>
            The present is full with lots of coding and designing UX/UIs. You
            see, I like developing what I design. I think that is really a perk,
            because I can keep things real and achieveble. Being a developer who
            loves to design I am constatly learning new stuff and pushing my own
            limits. My present tech stack includes React.js, Next.js, Gatsby.js,
            TailwindCSS, Styled Components, SCSS. I also do webflow, create mail
            templates in Sendgrid and Mailchimp . I am good with Adobe XD and
            Figma. I always find time to learn something new. At the moment I am
            learning Typescript and Unit testing.
          </p>
          <div className='align-center m-auto grid max-h-96 w-1/2 grid-cols-2 justify-center sm:flex md:w-full '>
            <ReactLogo className='h-20 w-full animate-pulse p-2 grayscale hover:grayscale-0' />
            <NextLogo className='h-20 w-full animate-pulse p-2 grayscale delay-75 hover:grayscale-0' />
            <GatsbyLogo className='h-20 w-full animate-pulse p-2 grayscale delay-100 hover:grayscale-0' />
            <TailwindLogo className='h-20 w-full animate-pulse p-2 grayscale delay-150 hover:grayscale-0' />
            <SassLogo className='h-16 w-full animate-pulse p-2 grayscale delay-200 hover:grayscale-0' />
            <WebflowLogo className='delay-250 h-20 w-full animate-pulse p-2 grayscale hover:grayscale-0' />
            <XDLogo className='h-20 w-full animate-pulse p-2 grayscale delay-300 hover:grayscale-0' />
            <FigmaLogo className='delay-350 h-20 w-full animate-pulse p-2 grayscale hover:grayscale-0' />
          </div>
          <p className='mx-auto mb-10 mt-10 w-11/12 text-center text-sm font-light text-dark md:w-full'>
            Above is the tech stack I am currently working with. On my wishlist
            of technologies I want to become fluent with are thw following one.
          </p>
          <div className='align-center m-auto grid max-h-96 w-1/2 grid-cols-2 justify-center sm:flex '>
            <TypescriptLogo className='h-20 w-full animate-pulse p-2 grayscale hover:grayscale-0' />
            <JestLogo className='h-20 w-full animate-pulse p-2 grayscale delay-75 hover:grayscale-0' />
            <ViteLogo className='h-20 w-full animate-pulse p-2 grayscale delay-100 hover:grayscale-0' />
            <VueLogo className='h-20 w-full animate-pulse p-2 grayscale delay-150 hover:grayscale-0' />
          </div>
          <h1
            id='future'
            ref={myRef}
            className='mx-auto mt-20 mb-10 w-11/12 text-3xl font-light md:w-5/6 md:text-5xl'
          >
            The Future
          </h1>
          <p className='mx-auto mb-10 w-11/12 text-sm font-light text-dark md:w-full'>
            You think we may have a future together? Cannot wait to hear from
            you. <br /> <em>Stay creative!</em>
          </p>
          <ContactForm />
        </section>
      </main>
    </Layout>
  );
}
