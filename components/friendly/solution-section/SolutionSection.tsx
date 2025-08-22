'use client';

import React from 'react';
import { ContactDialog } from '@/components/contact-form';

export type Step = {
  number: number;
  title: string;
  description: string;
};

export type SolutionSectionProps = {
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  steps: Step[];
  product: boolean;
};

const SolutionSection: React.FC<SolutionSectionProps> = ({
  badge,
  title,
  subtitle,
  cta,
  steps,
  product,
}) => {
  return (
    <section id='solution' className='px-4 py-10 sm:py-16 md:px-6'>
      <div className='container mx-auto text-center'>
        <span className='bg-secondary rounded-full px-3 py-1 text-xs'>
          {badge}
        </span>
        <h2 className='mt-3 text-3xl font-bold'>{title}</h2>
        <p className='text-muted-foreground mx-auto mt-2 max-w-2xl'>
          {subtitle}
        </p>
      </div>
      <div className='mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {steps.map((step) => (
          <div key={step.number} className='bg-card rounded-2xl border p-5'>
            <div className='bg-primary/15 text-primary inline-flex h-8 w-8 items-center justify-center rounded-full font-semibold'>
              {step.number}
            </div>
            <h3 className='mt-3 font-medium'>{step.title}</h3>
            <p className='text-muted-foreground mt-1 text-sm'>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className='mt-8 text-center'>
        <ContactDialog
          triggerText={cta}
          className='rounded-full px-6'
          product={product}
          showIcon={true}
        />
      </div>
    </section>
  );
};

export default SolutionSection;
