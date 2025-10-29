'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
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
    <section id='how-it-works' className='px-4 py-12 sm:py-16 md:py-20'>
      <div className='container mx-auto max-w-6xl'>
        {/* Header Section */}
        <div className='text-center'>
          <span className='bg-primary/10 text-primary border-primary/30 rounded-full border px-4 py-1 text-sm font-medium md:text-lg'>
            {badge}
          </span>
          <h2
            className='mt-4 mb-4 text-3xl leading-tight font-medium tracking-wide sm:text-4xl md:text-5xl'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className='text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg'>
            {subtitle}
          </p>
        </div>

        {/* Steps Section */}
        <div className='mt-12 grid gap-8 lg:grid-cols-2'>
          {steps.map((step) => (
            <div
              key={step.number}
              className='flex flex-col justify-between rounded-xl border border-gray-50 bg-white p-6'
            >
              {/* Step Number */}
              <div className='mb-4'>
                <div className='from-primary to-primary/80 w-fit rounded-lg bg-linear-to-b px-4 py-2'>
                  <span className='text-lg font-semibold text-white'>
                    {step.number}
                  </span>
                </div>
              </div>

              <h3 className='mb-3 text-lg font-semibold text-gray-900'>
                {step.title}
              </h3>

              <p className='text-sm leading-relaxed text-gray-600'>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-12 px-8 text-center lg:px-0'>
          <ContactDialog
            triggerText={cta}
            className='border-primary/30 h-12 w-full rounded-xl px-10 text-lg sm:w-auto'
            product={product}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
