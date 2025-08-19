'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from '@/components/contact-form';
import { ArrowRight } from 'lucide-react';

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
    <section
      id='solution'
      className='container mx-auto px-4 py-12 sm:py-16 md:py-20'
    >
      <div className='mb-8'>
        <span className='bg-secondary rounded-full px-2 py-1 text-xs'>
          {badge}
        </span>
        <h2 className='mt-3 text-xl font-semibold sm:text-2xl md:text-3xl'>
          {title}
        </h2>
        <p className='text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base'>
          {subtitle}
        </p>
      </div>

      <div className='grid h-full gap-6 md:grid-cols-2'>
        <div className='flex flex-col space-y-6'>
          {steps.slice(0, 2).map((step) => (
            <div
              key={step.number}
              className='bg-card flex-1 rounded-xl border p-6'
            >
              <div className='flex h-full gap-3'>
                <span className='bg-primary/10 text-primary mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full text-xs'>
                  {step.number}
                </span>
                <div className='flex flex-col'>
                  <p className='font-medium'>{step.title}</p>
                  <p className='text-muted-foreground flex-1 text-sm'>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col space-y-6'>
          {steps.slice(2).map((step) => (
            <div
              key={step.number}
              className='bg-card flex-1 rounded-xl border p-6'
            >
              <div className='flex h-full gap-3'>
                <span className='bg-primary/10 text-primary mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full text-xs'>
                  {step.number}
                </span>
                <div className='flex flex-col'>
                  <p className='font-medium'>{step.title}</p>
                  <p className='text-muted-foreground flex-1 text-sm'>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-8'>
        <ContactDialog
          triggerText={cta}
          className='border-primary/30 flex items-center gap-2'
          product={product}
        />
      </div>
    </section>
  );
};

export default SolutionSection;
