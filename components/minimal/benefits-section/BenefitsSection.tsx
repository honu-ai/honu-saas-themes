'use client';

import React from 'react';
import { Thermometer, Sparkles, Feather } from 'lucide-react';

export type BenefitsSectionProps = {
  title: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
    benefits: string[];
  }>;
  bottomSection: {
    title: string;
    description: string;
  };
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  description,
  cards,
  bottomSection,
}) => {
  return (
    <section id='benefits' className='bg-muted/20 border-t py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mt-2 max-w-2xl'>{description}</p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {[
            { Icon: Thermometer, ...cards[0] },
            { Icon: Sparkles, ...cards[1] },
            { Icon: Feather, ...cards[2] },
          ].map((c, i) => (
            <div key={i} className='bg-card rounded-lg border p-6'>
              <div className='bg-secondary text-secondary-foreground mb-3 grid h-8 w-8 place-items-center rounded'>
                <c.Icon className='h-4 w-4' />
              </div>
              <h3 className='font-medium'>{c.title}</h3>
              <p className='text-muted-foreground mt-1 text-sm'>
                {c.description}
              </p>
              <ul className='text-muted-foreground mt-4 list-disc pl-5 text-sm'>
                {c.benefits.map((b: string, bi: number) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='bg-card mt-10 rounded-lg border p-6'>
          <h4 className='font-medium'>{bottomSection.title}</h4>
          <p className='text-muted-foreground mt-1 text-sm'>
            {bottomSection.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
