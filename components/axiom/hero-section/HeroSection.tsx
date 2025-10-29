'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

// Add interface to extend Window interface with dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export type HeroSectionProps = {
  href?: string;
  ctaText: string;
  heroText: string;
  heroDescriptionHeading: string;
  heroDescription: string;
  secondaryCtaText?: string;
  secondaryHref?: string;
  product?: boolean;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  href,
  ctaText,
  heroText,
  heroDescriptionHeading,
  heroDescription,
  secondaryCtaText = 'SIGN UP FOR FREE',
  secondaryHref,
  product,
}) => {
  return (
    <section className='px-4 py-32 lg:px-0'>
      <div className='container mx-auto text-center'>
        <div className='mx-auto flex max-w-5xl flex-col gap-6'>
          <h1 className='text-3xl leading-tight font-medium tracking-wide lg:text-6xl'>
            {heroText}
          </h1>
          <p className='text-muted-foreground text-balance lg:text-lg'>
            {heroDescription}
          </p>
        </div>
        <div className='mt-12 flex flex-col justify-center gap-4 px-8 sm:flex-row sm:gap-6 lg:px-0'>
          <ContactDialog
            triggerText={ctaText}
            className='h-18 rounded-xl border-none px-10'
            product={product}
          />
        </div>
      </div>
      <HeroVideoDialog
        className='[&div>button>img]:shadow-primary/50 mx-auto mt-12 max-w-5xl rounded-4xl [&div>button>img]:rounded-xl [&div>button>img]:shadow-[0_4px_40px_rgba(0,0,0,0.08)]'
        animationStyle='from-center'
        videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
        thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
        thumbnailAlt='Hero Video'
      />
    </section>
  );
};

export default HeroSection;
