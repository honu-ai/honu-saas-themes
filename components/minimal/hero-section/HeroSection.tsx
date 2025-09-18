import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { SmilePlus } from 'lucide-react';
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
    <section id='hero' className='container mx-auto max-w-4xl px-4 py-20'>
      <div className='border-border/40 bg-background/60 text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs backdrop-blur-sm'>
        <span>{heroDescriptionHeading}</span>
      </div>
      <h1 className='max-w-3xl text-5xl font-semibold tracking-tight'>
        {heroText}
      </h1>
      <p className='text-muted-foreground mt-4 max-w-2xl'>{heroDescription}</p>
      <div className='mt-6 flex gap-3'>
        <ContactDialog
          triggerText={ctaText}
          className='animate-slide-up hover-scale w-full rounded-md border-none px-4! py-1! text-sm! sm:w-auto'
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
    </section>
  );
};

export default HeroSection;
