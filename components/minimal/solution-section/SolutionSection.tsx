'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import Link from 'next/link';

export type SolutionSectionProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  href?: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;

  product?: boolean;
  secondaryCtaText?: string;
  secondaryHref?: string;
};

const SolutionSection: React.FC<SolutionSectionProps> = ({
  title,
  subtitle,
  ctaText,
  href,
  steps,
  product,
  secondaryCtaText,
  secondaryHref,
}) => {
  return (
    <section id='solution' className='container mx-auto max-w-6xl px-4 py-16'>
      <h2 className='text-3xl font-semibold'>{title}</h2>
      <p className='text-muted-foreground mt-2 max-w-2xl'>{subtitle}</p>
      <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {steps.map((step) => (
          <div key={step.number} className='bg-card rounded-lg border p-6'>
            <div className='bg-secondary text-secondary-foreground inline-flex h-8 w-8 items-center justify-center rounded text-sm'>
              {step.number}
            </div>
            <h3 className='mt-3 font-medium'>{step.title}</h3>
            <p className='text-muted-foreground mt-1 text-sm'>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <ContactDialog
          triggerText={ctaText}
          className='animate-slide-up hover-scale w-full rounded-md border-none px-2! py-1! text-sm! sm:w-auto'
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

export default SolutionSection;
