'use client';

import React from 'react';
import { icons } from 'lucide-react';

export type BenefitsSectionProps = {
  badge: string;
  title: string;
  description: string;
  cards: Array<{
    title: string;
    description: string;
    icon: string;
    benefits: string[];
  }>;
  bottomSection: {
    title: string;
    description: string;
  };
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  badge,
  title,
  description,
  cards,
  bottomSection,
}) => {
  return (
    <section id='benefits' className='bg-muted/20 py-16'>
      <div className='container mx-auto'>
        <span className='bg-secondary rounded px-2 py-1 font-mono text-[10px]'>
          {badge}
        </span>
        <h2 className='mt-3 text-3xl font-semibold'>{title}</h2>
        <p className='text-muted-foreground mt-1 max-w-2xl'>{description}</p>
        <div className='mt-8 grid gap-6 md:grid-cols-3'>
          {cards.map((card, i) => {
            const Icon = icons[card.icon as keyof typeof icons];
            return (
              <div key={i} className='bg-card rounded-xl border p-6'>
                <div className='bg-primary/10 text-primary mb-4 inline-flex h-9 w-9 items-center justify-center rounded'>
                  <Icon className='h-5 w-5' />
                </div>
                <h3 className='font-medium'>{card.title}</h3>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {card.description}
                </p>
                <ul className='text-muted-foreground mt-4 space-y-1 font-mono text-sm'>
                  {card.benefits.map((benefit, bi) => (
                    <li key={bi}>$ {benefit}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className='bg-card mt-10 rounded-xl border p-6'>
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
