'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export type HeroSectionProps = {
  heroText: string;
  heroDescription: string;
  ctaText: string;
  href?: string;
  secondaryCtaText?: string;
  secondaryHref?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  heroText,
  heroDescription,
  ctaText,
  href,
  secondaryCtaText = 'Learn More',
  secondaryHref = '#solution',
}) => {
  return (
    <section id='hero' className='container mx-auto py-20'>
      <h1 className='max-w-3xl text-5xl font-semibold tracking-tight'>
        {heroText}
      </h1>
      <p className='text-muted-foreground mt-4 max-w-2xl'>{heroDescription}</p>
      <div className='mt-6 flex gap-3'>
        <Button asChild>
          <a href={href} className='flex items-center gap-2'>
            {ctaText} <ArrowRight className='ml-2 h-4 w-4' />
          </a>
        </Button>
        {secondaryHref && (
          <Button variant='secondary' asChild>
            <a href={secondaryHref}>{secondaryCtaText}</a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
