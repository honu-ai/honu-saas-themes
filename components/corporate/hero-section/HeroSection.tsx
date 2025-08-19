'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { ArrowRight } from 'lucide-react';

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
  steps?: Array<{
    number: number;
    title: string;
    description: string;
  }>;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  href,
  ctaText,
  heroText,
  heroDescriptionHeading,
  heroDescription,
  secondaryCtaText = 'Learn how it works',
  secondaryHref = '#solution',
  product,
  steps = [],
}) => {
  return (
    <section
      id='hero'
      className='container mx-auto grid items-center gap-10 px-4 py-12 sm:py-16 md:py-20 lg:grid-cols-2'
    >
      <div>
        <span className='bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-xs'>
          {heroDescriptionHeading}
        </span>
        <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
          {heroText}
        </h1>
        <p className='text-muted-foreground mt-4 max-w-xl text-base sm:text-lg'>
          {heroDescription}
        </p>
        <div className='mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center'>
          <ContactDialog
            triggerText={ctaText}
            className='border-primary/30 flex items-center gap-2'
            product={product}
          />
          {secondaryHref && (
            <a
              href={secondaryHref}
              className='text-primary text-sm underline underline-offset-4'
            >
              {secondaryCtaText}
            </a>
          )}
        </div>
      </div>

      {steps && steps.length > 0 && (
        <div className='bg-card rounded-lg border p-6 shadow-sm'>
          <ol className='space-y-4 text-sm'>
            {steps.map((step) => (
              <li key={step.number} className='flex gap-3'>
                <span className='bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
                  {step.number}
                </span>
                <div>
                  <p className='font-medium'>{step.title}</p>
                  <p className='text-muted-foreground'>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
