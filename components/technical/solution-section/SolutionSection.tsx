'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';

export type SolutionSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  product?: boolean;
  steps: Array<{
    number: number;
    title: string;
    description: string;
  }>;
};

const SolutionSection: React.FC<SolutionSectionProps> = ({
  badge,
  title,
  subtitle,
  cta,
  product,
  steps,
}) => {
  return (
    <section id='solution' className='container mx-auto py-16'>
      <div className='mb-8'>
        <span className='bg-secondary rounded px-2 py-1 font-mono text-[10px]'>
          {badge}
        </span>
        <h2 className='mt-3 text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mt-2 max-w-2xl'>{subtitle}</p>
      </div>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {steps.map((step) => (
          <div key={step.number} className='bg-card rounded-xl border p-5'>
            <div className='bg-primary/10 text-primary inline-flex h-7 w-7 items-center justify-center rounded font-mono text-xs'>
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
          triggerText={cta}
          className='inline-flex items-center'
          product={product}
        >
          {cta}
        </ContactDialog>
      </div>
    </section>
  );
};

export default SolutionSection;
