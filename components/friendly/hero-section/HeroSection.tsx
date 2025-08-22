'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { SmilePlus } from 'lucide-react';

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
    <section
      id='hero'
      className='relative overflow-hidden px-4 py-12 sm:py-16 md:px-6 md:py-20'
    >
      <div className='bg-primary/20 absolute -top-12 -left-12 h-48 w-48 rounded-full blur-3xl sm:-top-24 sm:-left-24 sm:h-72 sm:w-72' />
      <div className='bg-accent/20 absolute -right-12 -bottom-12 h-48 w-48 rounded-full blur-3xl sm:-right-24 sm:-bottom-24 sm:h-72 sm:w-72' />
      <div className='relative z-10 container mx-auto max-w-4xl text-center'>
        <div className='bg-card inline-flex items-center gap-2 rounded-full px-4 py-2 shadow'>
          <SmilePlus className='text-primary h-4 w-4' />
          <span className='text-sm'>{heroDescriptionHeading}</span>
        </div>
        <h1 className='mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
          {heroText}
        </h1>
        <p className='text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg'>
          {heroDescription}
        </p>
        <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4'>
          <ContactDialog
            triggerText={ctaText}
            className='animate-slide-up hover-scale w-full rounded-full px-6 sm:w-auto'
            product={product}
            showIcon={true}
          />

          {secondaryHref && (
            <Link href={secondaryHref}>
              <Button
                variant='outline'
                className='hover-scale w-full rounded-full sm:w-auto'
              >
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
