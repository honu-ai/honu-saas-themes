'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

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
  secondaryCtaText,
  secondaryHref,
  product,
  steps = [],
}) => {
  return (
    <section id='hero' className='container mx-auto py-16'>
      <div className='grid items-center gap-10 lg:grid-cols-2'>
        <div>
          <div className='text-muted-foreground inline-flex items-center gap-2 rounded border px-2 py-1 font-mono text-xs'>
            <Code2 className='h-4 w-4' /> {heroDescriptionHeading}
          </div>
          <h1 className='mt-4 text-4xl font-bold tracking-tight md:text-5xl'>
            {heroText}
          </h1>
          <p className='text-muted-foreground mt-3 max-w-xl'>
            {heroDescription}
          </p>
          <div className='mt-6 flex gap-3'>
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

        {steps && steps.length > 0 && (
          <div className='bg-card rounded-xl border p-6 shadow-lg transition-shadow hover:shadow-xl'>
            <div className='text-muted-foreground mb-4 font-mono text-sm'>
              <span className='text-primary'># How it works</span>
            </div>
            <ol className='space-y-4'>
              {steps.map((step) => (
                <li key={step.number} className='flex gap-3 font-mono text-sm'>
                  <span className='bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded font-bold'>
                    {step.number}
                  </span>
                  <div>
                    <p className='font-semibold'>{step.title}</p>
                    <p className='text-muted-foreground text-xs'>
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
