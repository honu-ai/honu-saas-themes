'use client';

import React from 'react';
import { icons } from 'lucide-react';

export type ProblemSectionProps = {
  title: string;
  subtitle: string;
  resultSubtitle: string;
  cards: Array<{
    title: string;
    description: string;
  }>;
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  subtitle,
  resultSubtitle,
  cards,
}) => {
  return (
    <section id='problem' className='bg-muted/20 border-t border-b py-16'>
      <div className='container mx-auto max-w-6xl px-4'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mt-2'>{subtitle}</p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <div key={i} className='bg-card rounded-lg border p-6'>
                <div className='bg-secondary text-secondary-foreground mb-3 grid h-8 w-8 place-items-center rounded'>
                  <Icon className='h-4 w-4' />
                </div>
                <h3 className='font-medium'>{card.title}</h3>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
        <p className='text-muted-foreground mt-8 text-sm'>{resultSubtitle}</p>
      </div>
    </section>
  );
};

export default ProblemSection;
