'use client';

import React from 'react';
import { icons } from 'lucide-react';

export type ProblemSectionProps = {
  title: string;
  subtitle: string;
  result: string;
  resultSubtitle: string;
  cards: Array<{
    title: string;
    description: string;
    icon: keyof typeof icons;
  }>;
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  subtitle,
  result,
  resultSubtitle,
  cards,
}) => {
  return (
    <section id='problem' className='bg-muted/20 py-16'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mt-2'>{subtitle}</p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <div
                key={i}
                className='group bg-card rounded-xl border p-6 shadow-sm'
              >
                <div className='bg-primary/10 text-primary mb-3 inline-flex h-9 w-9 items-center justify-center rounded'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='group-hover:text-primary font-medium transition-colors'>
                  {card.title}
                </h3>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className='bg-card text-muted-foreground mt-8 rounded-xl border p-6 text-center font-mono text-sm'>
          {result} — {resultSubtitle}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
