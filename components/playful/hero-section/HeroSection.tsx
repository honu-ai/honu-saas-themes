'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { Sparkles, Star } from 'lucide-react';

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
  secondaryCtaText = 'LEARN MORE',
  secondaryHref,
  product,
  steps = [],
}) => {
  return (
    <section
      id='hero'
      className='relative overflow-hidden px-4 py-16 sm:py-20 md:px-6 md:py-24'
    >
      {/* Playful background elements */}
      <div className='bg-primary/20 animate-bounce-gentle absolute -top-24 left-1/4 h-96 w-96 rounded-full blur-3xl' />
      <div className='bg-accent/20 absolute right-1/4 -bottom-24 h-96 w-96 animate-pulse rounded-full blur-3xl' />
      <div className='bg-secondary/30 absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl' />

      {/* Floating decorative elements */}
      <div className='animate-wiggle absolute top-20 left-10'>
        <Star className='text-accent h-6 w-6 fill-current' />
      </div>

      <div className='absolute bottom-32 left-20 animate-pulse'>
        <Sparkles className='text-secondary h-7 w-7' />
      </div>

      <div className='relative z-10 container mx-auto max-w-5xl text-center'>
        <div className='bg-card/80 border-primary/20 hover-scale inline-flex items-center gap-3 rounded-full border-2 px-6 py-3 shadow-lg backdrop-blur-sm'>
          <Sparkles className='text-primary h-5 w-5 animate-pulse' />
          <span className='from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-sm font-medium text-transparent'>
            {heroDescriptionHeading}
          </span>
        </div>

        <h1 className='mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
          <span className='from-primary to-secondary bg-gradient-to-tr bg-clip-text text-transparent'>
            {heroText}
          </span>
        </h1>

        <p className='text-muted-foreground mx-auto mt-6 max-w-3xl text-lg leading-relaxed sm:text-xl'>
          {heroDescription}
        </p>

        <div className='mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6'>
          <ContactDialog
            triggerText={ctaText}
            className='group from-primary to-accent animate-pulse-glow relative overflow-hidden rounded-full bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl'
            product={product}
            showIcon={true}
          />

          {secondaryHref && (
            <Link href={secondaryHref}>
              <Button
                variant='outline'
                className='border-primary/30 bg-card/50 hover:bg-primary/10 hover:border-primary/50 hover-wiggle rounded-full border-2 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105'
              >
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </div>

        {/* How it works - playful steps */}
        {steps && steps.length > 0 && (
          <div className='border-primary/20 bg-card/60 mt-16 rounded-3xl border-2 p-8 shadow-2xl backdrop-blur-sm'>
            <div className='mb-6 text-center'>
              <div className='from-primary to-accent inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 text-white shadow-lg'>
                <Sparkles className='h-4 w-4' />
                <span className='text-sm font-bold'>✨ How it works</span>
              </div>
            </div>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
              {steps.map((step, index) => {
                const colors = [
                  'border-pink-200 bg-pink-50/80 dark:border-pink-800 dark:bg-pink-950/20',
                  'border-purple-200 bg-purple-50/80 dark:border-purple-800 dark:bg-purple-950/20',
                  'border-blue-200 bg-blue-50/80 dark:border-blue-800 dark:bg-blue-950/20',
                  'border-green-200 bg-green-50/80 dark:border-green-800 dark:bg-green-950/20',
                ];
                const numberColors = [
                  'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
                  'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
                  'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
                  'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
                ];

                return (
                  <div
                    key={step.number}
                    className={`group rounded-2xl border-2 p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:-rotate-1 hover:shadow-xl ${colors[index % colors.length]}`}
                  >
                    <div
                      className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 ${numberColors[index % numberColors.length]}`}
                    >
                      {step.number}
                    </div>
                    <h3 className='text-foreground group-hover:text-primary mb-1 text-sm font-bold transition-colors'>
                      {step.title}
                    </h3>
                    <p className='text-muted-foreground text-xs leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
