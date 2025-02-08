import React from 'react';
import { Element, Link as LinkScroll } from 'react-scroll';

import Button from '../components/Button';

const Hero = () => {
  return (
    <section className='relative border-2 border-amber-400 pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32 max-md:pt-36'>
      <Element name='hero'>
        <div className='container'>
          <div className='relative z-2 max-w-512 max-lg:max-w-388'>
            <div className='caption'>Video Editing</div>
            <h1 className='h1 max-lg:h2 mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
              Amazing Simple
            </h1>
            <p className='body-1 mb-14 max-w-440 max-md:mb-10'>
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to='features' offset={-100} smooth={true} spy={true}>
              <Button icon={'/images/zap.svg'}>Try it now</Button>
            </LinkScroll>
          </div>
          <div className='left-[calc(50%-340px)] pointer-events-none absolute -top-32 w-[1230px] hero-img_res'>
            <img
              src='/images/hero.png'
              className='size-1230 max-lg:h-auto'
              alt='hero'
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
